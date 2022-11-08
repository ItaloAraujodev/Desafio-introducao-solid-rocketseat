import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

interface IValid {
  type: number;
  error?: string;
  result?: User[];
}

/**
 * [x] - Verificar se um User é administrador
 * [x] - Se for, retorne todos os Users
 */

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): IValid {
    const buscarAdmin = this.usersRepository.findById(user_id);

    if (!buscarAdmin) {
      return { type: 400, error: "User not exists" };
    }

    const { admin } = buscarAdmin;
    if (admin === false) {
      return { type: 400, error: "User not permissions" };
    }
    const all = this.usersRepository.list();
    return { type: 201, result: all };
  }
}

export { ListAllUsersUseCase };
