import User from "../entities/User";

interface ICreateUsersDTO {
  name: string;
  email: string;
  password: string;
  driver_license: string;
}

interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { ICreateUsersDTO, IUsersRepository };
