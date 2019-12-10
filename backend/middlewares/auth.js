const {TOKEN_ERROR} = require('../constants/messages');
const { UsersServices, JwtServices } = require('../services');

const mwAuth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res
            .status(401)
            .json({error: TOKEN_ERROR})
    }

    return JwtServices.verify(token)
      .then(decodedToken => {
          return UsersServices.findUserById(decodedToken._id)
            .then(user => {
                if (user) {
                    req.user = user;
                    next();
                    return res;
                }
                return res
                  .status(401)
                  .json({error: TOKEN_ERROR})
            });
      })
      .catch(error => {
          console.log(error);
          return res
            .status(401)
            .json({error: TOKEN_ERROR})
      });
};

module.exports = mwAuth;
