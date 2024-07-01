"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rabbitmq_1 = require("./rabbitmq");
const generate_plate_1 = __importDefault(require("./generate-plate"));
const plate_repository_1 = require("./plate.repository");
const get_all_plates_1 = __importDefault(require("./get-all-plates"));
const main = async () => {
    const app = (0, express_1.default)();
    const plateRepository = new plate_repository_1.PlateRepositoryMemory();
    const generatePlate = new generate_plate_1.default(plateRepository);
    const getAllPlates = new get_all_plates_1.default(plateRepository);
    const rabbitmq = new rabbitmq_1.RabbitMQLib();
    await rabbitmq.connect();
    rabbitmq.consume("vehicleRegistered", async (msg) => {
        await generatePlate.execute(msg.vehicleId);
    });
    app.get("/get-all", async (req, res) => {
        res.json(await getAllPlates.execute());
    });
    app.listen(3000, () => console.log("Plate service is running in port 3000"));
};
main();
