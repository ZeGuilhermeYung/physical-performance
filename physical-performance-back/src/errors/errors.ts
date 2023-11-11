import { ErrorResponse } from "protocols/errors.protocols";

export function conflictError(message: string): ErrorResponse {
  return { type: "CONFLICT", message };
}

export function notFound(message: string): ErrorResponse {
  return { type: "NOT_FOUND", message };
}

export function unprocessableEntity(message: string | string[]): ErrorResponse {
  return { type: "UNPROCESSABLE_ENTITY", message};
}