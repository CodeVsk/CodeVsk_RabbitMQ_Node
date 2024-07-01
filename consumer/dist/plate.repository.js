"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlateRepositoryMemory = void 0;
class PlateRepositoryMemory {
    constructor() {
        this.plates = [];
    }
    async getAll() {
        return this.plates;
    }
    async create(plate) {
        await this.plates.push(plate);
    }
}
exports.PlateRepositoryMemory = PlateRepositoryMemory;
