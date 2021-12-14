import { Request, Response } from 'express';
import ListSpecificationsUseCase from './ListSpecificationsUseCase';

export default class ListSpecificationsController {
  constructor(private listSpecificationUseCase: ListSpecificationsUseCase) {}

  handle(req: Request, res: Response) {
    const allSpecifications = this.listSpecificationUseCase.execute();

    return res.json(allSpecifications);
  }
}
