interface ICreateUsersDTO {
  name: string;
  username: string;
  email: string;
  password: string;
  driver_license: string;
}

interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<void>;
}

export { ICreateUsersDTO, IUsersRepository };
