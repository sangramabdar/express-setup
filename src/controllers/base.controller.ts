import ResponseBuilder from "../utils/response-builder";

const get = (req, res, next) => {
  const response = new ResponseBuilder();
  res.json(response);
};

const notFound = (req, res, next) => {
  const response = new ResponseBuilder();

  response
    .setStatusCode(404)
    .setErrors(["not found"])
    .setOK(false)
    .setData(null);

  res.statusCode = 404;
  res.json(response);
};

const baseController = {
  get,
  notFound,
};

export { baseController };
