import { Request, Response, Router } from 'express';
import CategoriesRepository from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (req: Request, res: Response) => {
  const allCategories = categoriesRepository.list();

  return res.json(allCategories);
});

categoriesRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(400).json({ error: 'Category already exists' });
  }

  categoriesRepository.create({ name, description });

  return res.status(201).send();
});

export default categoriesRoutes;
