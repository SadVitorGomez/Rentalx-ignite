import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import {
  ICreateUsersDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";
import AppError from "../../../../errors/AppError";

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
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError(`${email} already exists`);
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}
