import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  findByLicense(license_plate: string): Promise<Car>;
  create(data: ICreateCarDTO): Promise<Car>;
  findAvailable(): Promise<Car[]>;
}

export { ICarsRepository };
