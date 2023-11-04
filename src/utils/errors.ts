class TokenError extends Error {
  statusCode = 401;
  static message = "token is invalid ";

  constructor() {
    super(TokenError.message);
  }
}

export { TokenError };
