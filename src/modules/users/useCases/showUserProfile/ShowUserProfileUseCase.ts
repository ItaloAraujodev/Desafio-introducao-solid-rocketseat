import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string): User {
    const findByAll = this.usersRepository.findById(user_id);
    return findByAll;
  }
}

export { ShowUserProfileUseCase };
