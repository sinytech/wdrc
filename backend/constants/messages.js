const ERROR_MESSAGES = {
  EMPTY_OR_WRONG_EMAIL: 'Empty or wrong email',
  EMPTY_OR_WRONG_PASSWORD: 'Empty or wrong password',
  INVALID_CREDENTIALS: 'Invalid email or password',
  REGISTRATION_ERROR: 'Error during account creation',
  TOKEN_ERROR: 'Wrong token',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  USER_WITH_SUCH_EMAIL_ALREADY_EXISTS: 'User with such email already exists',
  USER_NOT_FOUND: 'User not found',
  ERROR_WAS_OCCURRED_WHILE_CREATING_NEW_ACCOUNT:
    'Error was occurred while creating new account'
};

const MESSAGES = {
  OK: 'Ok',
  ACCOUNT_WAS_SUCCESSFULLY_CREATED: 'Account was successfully created'
};

module.exports = {ERROR_MESSAGES, MESSAGES};
