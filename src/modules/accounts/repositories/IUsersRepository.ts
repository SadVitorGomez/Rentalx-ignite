import User from "../entities/User";

interface ICreateUsersDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  driver_license: string;
  avatar?: string;
}

interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { ICreateUsersDTO, IUsersRepository };
