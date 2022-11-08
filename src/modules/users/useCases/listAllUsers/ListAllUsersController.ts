import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { headers } = request;
    const id: string = Array.isArray(headers.user_id)
      ? headers.user_id[0]
      : headers.user_id;
    const all = this.listAllUsersUseCase.execute({ user_id: id });

    return response.status(200).json(all);
  }
}

export { ListAllUsersController };
