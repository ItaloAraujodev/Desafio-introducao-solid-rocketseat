import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    const create = this.createUserUseCase.execute({ name, email });
    const { type, error, result } = create;

    if (error) {
      return response.status(type).json({ error });
    }

    return response.status(type).json(result);
  }
}

export { CreateUserController };
