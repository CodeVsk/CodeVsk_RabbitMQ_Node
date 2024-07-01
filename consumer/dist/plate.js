"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Plate {
    constructor(plate_id, vehicle_id, createdAt) {
        this.plate_id = plate_id;
        this.vehicle_id = vehicle_id;
        this.createdAt = createdAt;
    }
    static create(vehicle_id) {
        const id = crypto.randomUUID();
        const createdAt = new Date();
        return new Plate(id, vehicle_id, createdAt);
    }
    generatePlate() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        let plate = "";
        for (let i = 0; i < 3; i++) {
            plate += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        plate += "-";
        for (let i = 0; i < 4; i++) {
            plate += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        this.plate = plate;
    }
}
exports.default = Plate;
