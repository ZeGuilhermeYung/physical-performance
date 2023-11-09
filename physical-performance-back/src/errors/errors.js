export function conflictError (message) {
  return { type: "CONFLICT", message }
}

export function notFound (message) {
  return { type: "NOT_FOUND", message }
}

export function unprocessableEntity (message) {
  return { type: "UNPROCESSABLE_ENTITY", message }
}