import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const findById = this.usersRepository.findById(user_id);
    const update = this.usersRepository.turnAdmin(findById);

    return update;
  }
}

export { TurnUserAdminUseCase };
