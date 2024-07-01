"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plate_1 = __importDefault(require("./plate"));
class GeneratePlate {
    constructor(plateRepository) {
        this.plateRepository = plateRepository;
    }
    async execute({ vehicleId }) {
        const plate = plate_1.default.create(vehicleId);
        plate.generatePlate();
        await this.plateRepository.create(plate);
    }
}
exports.default = GeneratePlate;
