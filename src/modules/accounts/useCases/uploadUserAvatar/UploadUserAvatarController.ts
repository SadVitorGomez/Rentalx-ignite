import { Request, Response } from "express";
import { container } from "tsyringe";
import UploadUserAvatarUseCase from "./UploadUserAvatarUseCase";

export default class UploadUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const avatar_file = null;
    const uploadUserAvatarUseCase = container.resolve(UploadUserAvatarUseCase);

    await uploadUserAvatarUseCase.execute({ user_id: id, avatar_file });

    return res.status(204).send();
  }
}
