import { TokenError } from "./errors";
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./jwt";
import ResponseBuilder from "./response-builder";

async function isValidToken(
  req: Request & {
    user: any;
  },
  res: Response,
  next: NextFunction
) {
  try {
    const data = await verifyToken(req.cookies.token, "123");
    req.user = data;
    next();
  } catch (error) {
    error = new TokenError();
    next(error);
  }
}

async function handleClientErrors(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.statusCode) {
    const response = new ResponseBuilder()
      .setOK(false)
      .setStatusCode(error.statusCode)
      .setErrors([error.message])
      .build();

    res.status(error.statusCode);
    res.json(response);
    return;
  }

  next(error);
}

async function handleServerErrors(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const response = new ResponseBuilder()
    .setOK(false)
    .setStatusCode(500)
    .setErrors([error.message])
    .build();

  res.status(500);
  res.json(response);
}

export { isValidToken, handleClientErrors, handleServerErrors };
