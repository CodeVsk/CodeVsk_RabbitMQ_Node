export default class Plate {
  private plate: string;

  constructor(
    readonly plate_id: string,
    readonly vehicle_id: string,
    readonly createdAt: Date
  ) {}

  static create(vehicle_id: string) {
    const id = crypto.randomUUID();
    const createdAt = new Date();

    return new Plate(id, vehicle_id, createdAt);
  }

  generatePlate() {
    const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers: string = "0123456789";

    let plate: string = "";

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
