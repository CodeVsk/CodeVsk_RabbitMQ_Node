import Plate from "./plate";
import PlateRepository from "./plate.repository";

export default class GetAllPlates {
  constructor(readonly plateRepository: PlateRepository) {}

  async execute(): Promise<Plate[]> {
    return await this.plateRepository.getAll();
  }
}
