const jwt = require('jsonwebtoken');
const JWT_SECRET_SIGN = 'hemr@jsinght#@kur';

const fetchuser = (req, res, next) => {
  //getting the user from jwt token and appending that to req object
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send("Please authenticate the token!");
  }

  try {
    const data = jwt.verify(token, JWT_SECRET_SIGN);
    req.user = data.user;
    next();
  }
  catch (error) {
    res.status(401).send("Please authenticate the token!");
  }
}

module.exports = fetchuser;