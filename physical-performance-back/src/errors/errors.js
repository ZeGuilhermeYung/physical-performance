export function conflictError (message) {
  return { type: "CONFLICT", message }
}

export function notFound (message) {
  return { type: "NOT FOUND", message }
}

export function unprocessableEntity (message) {
  return { type: "UNPROCESSABLE ENTITY", message }
}