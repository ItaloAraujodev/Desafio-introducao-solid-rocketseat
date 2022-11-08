import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): User[] {
    const all = this.usersRepository.list();
    return all;
  }
}

export { ListAllUsersUseCase };
