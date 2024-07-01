import RabbitMQ from "./rabbitmq";
import Vehicle from "./vehicle";
import VehicleRepository from "./vehicle.repository";

export default class RegisterVehicle {
  constructor(
    readonly rabbitmq: RabbitMQ,
    readonly vehicleRepository: VehicleRepository
  ) {}

  async execute({ chassi, color, model, type }: Input): Promise<any> {
    const vehicle = Vehicle.create(chassi, color, model, type);

    await this.vehicleRepository.create(vehicle);

    const registeredVehicle = {
      vehicleId: vehicle.vehicle_id,
    };

    await this.rabbitmq.publisher("vehicleRegistered", registeredVehicle);
  }
}

type Input = {
  type: string;
  model: string;
  color: string;
  chassi: string;
};
