const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require("validator");
// const bcrypt = require("bcryptjs");



const userRoleSchema = new Schema({
    name:{
        type:String,
        required:[true, 'name is required'],
        trim:true
    },
    email:{
        type:String,
        required:[true, 'email is required'],
        unique: true,
        lowercase: true,
        trim:true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Email is invalid");
          }
        },
        
    },
    profession:{
        type:String,
        required:[true,'profession is required']
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:[true,'select a gender']

    },
    // password: {
    //     type: String,
    //     trim: true,
    //     required: [true, "Please enter a valid password"],
    //     minlength: [8, "Minimum password length must be 8 characters"],
    //     validate(value) {
    //       if (value.toLowerCase().includes("password")) {
    //         throw new Error("password mus'nt contain password");
    //       }
    //     },
    //   },
    date:{
        type:Date,
        default:Date.now()
    }
},{timestamps:true})

// userRoleSchema.pre("save", async function (next) {
//     const user = this;
//     if (user.isModified("password")) {
//       user.password = await bcrypt.hash(user.password, 8);
//     }
//     next();
//   });

const USER_ROLE = mongoose.model('User',userRoleSchema);
module.exports = USER_ROLE

