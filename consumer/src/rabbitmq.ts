import amqp from "amqplib";

export default interface RabbitMQ {
  connect(): Promise<void>;
  consume(queueName: string, callback: Function): Promise<void>;
  publisher(queueName: string, data: any): Promise<any>;
}

export class RabbitMQLib implements RabbitMQ {
  connection: amqp.Connection;

  queue_config: amqp.Options.AssertQueue = {
    durable: true,
  };

  async connect(): Promise<void> {
    this.connection = await amqp.connect("amqp://dev:dev@localhost");
  }

  async consume(queueName: string, callback: Function): Promise<void> {
    const channel = await this.connection.createChannel();
    await channel.assertQueue(queueName, this.queue_config);

    channel.consume(queueName, async (msg: amqp.ConsumeMessage) => {
      const content = JSON.parse(msg.content.toString());
      await callback(content);
      channel.ack(msg);
    });
  }

  async publisher(queueName: string, data: any): Promise<any> {
    const channel = await this.connection.createChannel();
    await channel.assertQueue(queueName, this.queue_config);
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
  }
}
