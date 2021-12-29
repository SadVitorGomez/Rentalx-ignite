import { Request, Response } from "express";
import { container } from "tsyringe";

import AuthUserUseCase from "./AuthUserUseCase";

export default class AuthenticateUserController {
  constructor() {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUserUseCase = container.resolve(AuthUserUseCase);

    const token = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return res.json(token);
  }
}
