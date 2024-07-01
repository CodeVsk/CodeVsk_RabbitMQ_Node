import express from "express";
import { RabbitMQLib } from "./rabbitmq";
import GeneratePlate from "./generate-plate";
import { PlateRepositoryMemory } from "./plate.repository";
import GetAllPlates from "./get-all-plates";

const main = async () => {
  const app = express();

  const plateRepository = new PlateRepositoryMemory();
  const generatePlate = new GeneratePlate(plateRepository);
  const getAllPlates = new GetAllPlates(plateRepository);

  const rabbitmq = new RabbitMQLib();
  await rabbitmq.connect();

  rabbitmq.consume("vehicleRegistered", async (msg: any) => {
    await generatePlate.execute(msg.vehicleId);
  });

  app.get("/get-all", async (req, res) => {
    res.json(await getAllPlates.execute());
  });

  app.listen(3000, () => console.log("Plate service is running in port 3000"));
};

main();
