// backend/model/userSchema.js
const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");
const {Schema}=mongoose;

const userSchema = new Schema({
     name: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     password: {
          type: String,
          required: true,
          select: false
     },
     bio: {
          type: String,
          required: true
     },
     username: {
       type: String,
       required: true
     }
});

userSchema.methods = {
     jwtToken() {
          return jwt.sign({
               id: this._id,
               username: this.username
          }, process.env.SECRET, {
               expiresIn: '24d'
          });
     }
}

userSchema.pre("save", async function(next){
    if (!this.isModified('password'))
        return next();
    this.password = await bcrypt.hash(this.password, 12);
    return next();
});

const Usermodel = mongoose.model("user", userSchema);
module.exports = { Usermodel };
