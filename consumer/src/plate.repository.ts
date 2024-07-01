import Plate from "./plate";

export default interface PlateRepository {
  create(plate: Plate): Promise<void>;
  getAll(): Promise<Plate[]>;
}

export class PlateRepositoryMemory implements PlateRepository {
  plates: Plate[];

  constructor() {
    this.plates = [];
  }

  async getAll(): Promise<Plate[]> {
    return this.plates;
  }

  async create(plate: Plate): Promise<void> {
    await this.plates.push(plate);
  }
}
