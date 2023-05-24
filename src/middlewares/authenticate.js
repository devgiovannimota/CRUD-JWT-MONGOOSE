const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response
      .status(401)
      .send({ error: true, message: "Token no provided" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return response.status(401).send({
      error: true,
      message: "Invalid Token type",
    });
  }
  const [scheme, token] = parts;

  if (scheme.indexOf("Bearer") !== 0) {
    return response
      .status(401)
      .json({ error: true, message: "Token malformatted" });
  }

  return jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return response.status(401).json({
        error: true,
        message: "Token invalid/expired",
      });
    }

    request.userLogged = decoded;

    console.log(err);
    console.log(decoded);

    return next();
  });
};
