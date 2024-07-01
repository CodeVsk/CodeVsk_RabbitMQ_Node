import { RabbitMQLib } from "@/rabbitmq";
import RegisterVehicle from "@/register-vehicle";
import { VehicleRepositoryMemory } from "@/vehicle.repository";

test("Devo registrar um veiculo e sequencialmente envia-lo para fila de geração de placa", async () => {
  const rabbitmq = new RabbitMQLib();
  await rabbitmq.connect();

  const vehicleRepository = new VehicleRepositoryMemory();

  const registerVehicle: RegisterVehicle = new RegisterVehicle(
    rabbitmq,
    vehicleRepository
  );

  const input = {
    type: "car",
    model: "suv",
    color: "black",
    chassi: "A477AHAS76AD6SA",
  };

  await registerVehicle.execute(input);

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 200);
  });

  await rabbitmq.close();
});
