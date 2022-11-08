import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

/**
 * [x] - Verificar se um User é administrador
 * [x] - Se for, retorne todos os Users
 */

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const buscarAdmin = this.usersRepository.findById(user_id);
    const { admin } = buscarAdmin;

    if (admin === false) {
      throw new Error("User not permissions");
    }
    const all = this.usersRepository.list();
    return all;
  }
}

export { ListAllUsersUseCase };
