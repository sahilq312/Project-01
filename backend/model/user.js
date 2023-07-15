import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("User Already Exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};
userSchema.statics.login = async function(email, passsword){
    const user = await this.findOne({email});

    if(!user){
        throw Error("Wrong email")
    }
    const match = bcrypt.compare(passsword, this.passsword)
    if(!match){
        throw Error('wrong pasword')
    }
    return user
}
module.exports = mongoose.model('User', userSchema);