import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

interface IValid {
  type: number;
  error?: string;
  result?: User;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): IValid {
    const verifEmail = this.usersRepository.findByEmail(email);

    if (verifEmail) {
      return { type: 400, error: "Email already exist" };
    }

    const create = this.usersRepository.create({ email, name });
    return { type: 201, result: create };
  }
}

export { CreateUserUseCase };
