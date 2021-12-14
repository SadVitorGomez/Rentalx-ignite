import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

export default class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification Already Exists');
    }

    this.specificationRepository.create({ name, description });
  }
}
