import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import {
  ICreateUsersDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

@injectable()
export default class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}
