const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose'),
  userSchema = new Schema({
    username: String,
    password: String,
    isManager: Boolean
  })

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('users', userSchema)
