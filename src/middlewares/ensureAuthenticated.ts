import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import UsersRepository from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export default async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "9123dcbb0b42652b0e105956c68d3ca2ff34584f324fa41a29aedd32b883e131",
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User doesn't exists");
    }

    next();
  } catch (error) {
    throw new Error("Invalid token!");
  }
}
