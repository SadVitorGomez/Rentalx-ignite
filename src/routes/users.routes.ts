import { Router } from "express";
import multer from "multer";

import CreateUserController from "../modules/accounts/useCases/createUser/CreateUserController";
import UploadUserAvatarController from "../modules/accounts/useCases/uploadUserAvatar/UploadUserAvatarController";

const usersRoutes = Router();

const upload = multer({
  dest: "./avatar",
});

const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);

const uploadUserAvatarController = new UploadUserAvatarController();
usersRoutes.patch(
  "/avatar",
  upload.single("file"),
  uploadUserAvatarController.handle,
);

export default usersRoutes;
