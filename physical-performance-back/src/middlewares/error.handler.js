import status from "http-status"

export default function errorHandler(error, request, response, next) {

    if (error.type === "UNPROCESSABLE ENTITY")
      return response.status(status.UNPROCESSABLE_ENTITY).send(error.message);

    if (error.type === "CONFLICT")
      return response.status(status.CONFLICT).send(error.message);

    if (error.type === "NOT FOUND")
      return response.status(status.NOT_FOUND).send(error.message);

    return response.status(status.INTERNAL_SERVER_ERROR).send("Desculpe, algo deu errado!")
}