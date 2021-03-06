const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {nanoid} = require('nanoid');
const Schema = mongoose.Schema;

const SocialNetworksSchema = new Schema({
  fb: String,
  github: String,
  vk: String,
  tw: String,
  instagram: String,
  skype: String,
  tme: String,
  website: String,
  youtube: String,
});

const PassedLessonSchema = new Schema({
  lesson: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const MyCoursesSchema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  passedLessons: [PassedLessonSchema],
  timestamp: {
    type: Date,
    default: Date.now,
  },
  progress: {
    type: Number,
    default: 0,
  },
});

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: async function (value) {
        if (!this.isModified('email')) return true;
        const user = await User.findOne({email: value});
        return !user;
      },
      message: 'Этот пользователь уже зарегастрирован'
    }
  },
  password: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['user', 'admin'],
  },
  myCourses: [MyCoursesSchema],
  favoriteCourses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }],
  aboutMe: String,
  socialNetworks: [SocialNetworksSchema],
  facebookId: String,
  googleId: String,
  code: String
});

const SALT_WORK_FACTOR = 10;

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.password;
    return ret;
  }
});

UserSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function () {
  this.token = nanoid();
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
