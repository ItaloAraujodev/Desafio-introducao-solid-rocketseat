import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const findById = this.showUserProfileUseCase.execute({ user_id });
    const { type, error, result } = findById;

    if (error) {
      return response.status(type).json({ error });
    }

    return response.status(type).json(result);
  }
}

export { ShowUserProfileController };
