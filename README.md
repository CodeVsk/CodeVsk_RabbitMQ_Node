# RabbitMQ and Node.js

Publisher & Consumer examples using RabbitMQ with Express.

## Authors

- [@CodeVsk](https://www.github.com/codevsk)

## Technologies

**Back-end:** Express, Typescript

**Messaging:**: RabbitMQ

**Test:** Jest

## Run project in localhost

Clone project

```bash
  git clone https://github.com/CodeVsk/CodeVsk_RabbitMQ_Node.git
```

Enter in project directorie

```bash
  cd CodeVsk_RabbitMQ_Node
```

Download image RabbitMQ and up docker container

```bash
  docker-compose up -d
```

Run the consumer from the queue (make sure you install the dependencies first)

```bash
  cd consumer | npm run dev
```

Run the test to populate the queue (make sure you install the dependencies first)

```bash
  cd producer | npm test
```

## Reference

- [RabbitMQ](https://www.rabbitmq.com/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
