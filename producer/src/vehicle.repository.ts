import Vehicle from "./vehicle";

export default interface VehicleRepository {
  create(vehicle: Vehicle): Promise<void>;
}

export class VehicleRepositoryMemory implements VehicleRepository {
  vehicles: Vehicle[];

  constructor() {
    this.vehicles = [];
  }

  async create(vehicle: Vehicle): Promise<void> {
    await this.vehicles.push(vehicle);
  }
}
