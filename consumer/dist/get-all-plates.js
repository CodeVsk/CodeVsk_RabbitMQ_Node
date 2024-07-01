"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetAllPlates {
    constructor(plateRepository) {
        this.plateRepository = plateRepository;
    }
    async execute() {
        return await this.plateRepository.getAll();
    }
}
exports.default = GetAllPlates;
