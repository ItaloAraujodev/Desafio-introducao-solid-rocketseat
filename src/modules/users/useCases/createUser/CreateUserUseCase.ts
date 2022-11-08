import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const verifEmail = this.usersRepository.findByEmail(email);
    if (verifEmail) {
      throw new Error("Email already exists");
    }

    const create = this.usersRepository.create({ email, name });
    return create;
  }
}

export { CreateUserUseCase };
