const jwt = require('jsonwebtoken');
const config = require('config');

const verify = token => {
  return new Promise((r, e) => jwt.verify(
    token,
    config.get('secretKey'),
    {},
    (error, decoded) => error ? e(error) : r(decoded)
  ));
};

const createJWT = ({ _id, email }) => {
  return jwt.sign(
    {
      _id,
      email
    },
    config.get('secretKey'),
    {
      expiresIn: config.get('tokenMaxAge'),
      algorithm: 'HS256'
    });
};

module.exports = {
  createJWT,
  verify
};
