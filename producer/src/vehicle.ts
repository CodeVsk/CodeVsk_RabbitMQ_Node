export default class Vehicle {
  constructor(
    readonly vehicle_id: string,
    readonly type: string,
    readonly model: string,
    readonly color: string,
    readonly chassi: string,
    readonly created_at: Date,
    private plate: string
  ) {}

  static create(type: string, model: string, color: string, chassi: string) {
    const id = crypto.randomUUID();
    const createdAt = new Date();

    return new Vehicle(id, type, model, color, chassi, createdAt, null);
  }

  setPlate(plate: string) {
    this.plate = plate;
  }
}
