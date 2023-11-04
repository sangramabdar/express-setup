import jwt from "jsonwebtoken";

async function verifyToken(token: string, secretKey: string) {
  const data = await jwt.verify(token, secretKey);
  return data;
}

function generateToken(
  data: any,
  secretKey: string,
  options?: jwt.SignOptions
) {
  const token = jwt.sign(data, secretKey, options);
  return token;
}

export { generateToken, verifyToken };
