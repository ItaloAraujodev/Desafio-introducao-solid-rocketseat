import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const findByAll = this.usersRepository.findById(user_id);

    if (!findByAll) {
      throw new Error("User not found");
    }

    return findByAll;
  }
}

export { ShowUserProfileUseCase };
