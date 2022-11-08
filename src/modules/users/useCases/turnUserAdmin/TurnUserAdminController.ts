import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const findAll = this.turnUserAdminUseCase.execute({ user_id });

    const { type, result, error } = findAll;

    if (error) {
      return response.status(type).json({ error });
    }

    return response.status(type).json(result);
  }
}

export { TurnUserAdminController };
