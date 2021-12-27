import { Router } from "express";
import CreateSpecificationController from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import listSpecificationsController from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.get("/", (req, res) => {
  return listSpecificationsController.handle(req, res);
});

const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.post("/", createSpecificationController.handle);

export default specificationsRoutes;
