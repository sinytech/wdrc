const {mongoose} = require('../');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    default: null,
    required: true,
    minlength: 1,
  },
  username: {
    type: String,
    default: null,
    required: true,
    minlength: 1,
  },
  password: {
    type: String,
    default: null,
    required: true,
    minlength: 1,
  },
  salt: {
    type: String,
    default: null
  },
  team: {
    type: String,
    default: null
  },
  avatar_id: {
    type: Schema.Types.ObjectId,
    ref: 'File'
  },
  updated_at: Date,
  created_at: Date,
}, {
  versionKey: false
});

UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
