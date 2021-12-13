import { Router } from 'express';
import SpecificationsRepository from '../modules/cars/repositories/implementations/SpecificationsRepository';
import CreateSpecificationService from '../modules/cars/service/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.get('/', (req, res) => {
  const allSpecifications = specificationsRepository.list();

  return res.json(allSpecifications);
});

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

export default specificationsRoutes;
