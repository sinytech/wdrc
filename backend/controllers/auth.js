const { MESSAGES, ERROR_MESSAGES } = require('../constants/messages');
const { UsersServices, JwtServices, FilesServices } = require('../services');

const signIn = (req, res) => {
    if (!req.body.email || req.body.email.length < 5) {
        return res
            .status(400)
            .json({error: ERROR_MESSAGES.EMPTY_OR_WRONG_EMAIL})
    }

    if (!req.body.password || req.body.password.length < 5) {
        return res
            .status(400)
            .json({error: ERROR_MESSAGES.EMPTY_OR_WRONG_PASSWORD})
    }

    return UsersServices.findUserByEmail(req.body.email)
        .then(existingUser => {
            if (!existingUser) {
                return res
                    .status(400)
                    .json({error: ERROR_MESSAGES.USER_NOT_FOUND})
            }
            const token = JwtServices.createJWT(existingUser);

            return FilesServices.getFileById(existingUser.avatar_id)
                .then(avatar => {
                    return res.status(200).json({
                        _id: existingUser._id,
                        email: existingUser.email,
                        username: existingUser.username,
                        token,
                        team: existingUser.team,
                        avatar: avatar ? FilesServices.addPath(avatar) : null
                    });
                })
        });
};

const signUp = (req, res) => {
    if (!req.body.email || req.body.email.length < 5) {
        return res
            .status(400)
            .json({error: ERROR_MESSAGES.EMPTY_OR_WRONG_EMAIL})
    }

    if (!req.body.username || !req.body.password) {
        return res
            .status(400)
            .json({error: ERROR_MESSAGES.INVALID_CREDENTIALS})
    }

    return UsersServices.findUserByEmail(req.body.email)
        .then(existingUser => {
            if (existingUser) {
                return res
                    .status(400)
                    .json({error: ERROR_MESSAGES.USER_WITH_SUCH_EMAIL_ALREADY_EXISTS})
            }

            return FilesServices.createFile({ ...req.file, type: 'avatar' })
                .then(file => {
                    return UsersServices.registerUser({ ...req.body, avatar_id: file._id })
                })
                .then(() => {
                    return res
                        .status(201)
                        .json({message: MESSAGES.ACCOUNT_WAS_SUCCESSFULLY_CREATED})
                })
        })
        .catch(error => {
            console.log(error);
            return res
                .status(400)
                .json({error: ERROR_MESSAGES.ERROR_WAS_OCCURRED_WHILE_CREATING_NEW_ACCOUNT})
        })
}

module.exports = {
    signIn,
    signUp
};
