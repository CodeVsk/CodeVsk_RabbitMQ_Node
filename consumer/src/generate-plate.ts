import Plate from "./plate";
import PlateRepository from "./plate.repository";

export default class GeneratePlate {
  constructor(readonly plateRepository: PlateRepository) {}

  async execute({ vehicleId }: Input): Promise<any> {
    const plate = Plate.create(vehicleId);

    plate.generatePlate();

    await this.plateRepository.create(plate);
  }
}

type Input = {
  vehicleId: string;
};
