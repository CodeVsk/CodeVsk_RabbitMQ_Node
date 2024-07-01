"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQLib = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
class RabbitMQLib {
    constructor() {
        this.queue_config = {
            durable: true,
        };
    }
    async connect() {
        this.connection = await amqplib_1.default.connect("amqp://dev:dev@localhost");
    }
    async consume(queueName, callback) {
        const channel = await this.connection.createChannel();
        await channel.assertQueue(queueName, this.queue_config);
        channel.consume(queueName, async (msg) => {
            const content = JSON.parse(msg.content.toString());
            await callback(content);
            channel.ack(msg);
        });
    }
    async publisher(queueName, data) {
        const channel = await this.connection.createChannel();
        await channel.assertQueue(queueName, this.queue_config);
        await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    }
}
exports.RabbitMQLib = RabbitMQLib;
