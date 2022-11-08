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

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): IValid {
    const findById = this.usersRepository.findById(user_id);

    if (!findById) {
      return { type: 404, error: "User not found" };
    }

    const update = this.usersRepository.turnAdmin(findById);
    return { type: 200, result: update };
  }
}

export { TurnUserAdminUseCase };
