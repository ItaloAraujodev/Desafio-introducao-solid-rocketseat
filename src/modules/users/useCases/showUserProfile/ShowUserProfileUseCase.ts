import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

interface IValid {
  type: number;
  error?: string;
  result?: User;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): IValid {
    const findByAll = this.usersRepository.findById(user_id);

    if (!findByAll) {
      return { type: 404, error: "User not found" };
    }

    return { type: 201, result: findByAll };
  }
}

export { ShowUserProfileUseCase };
