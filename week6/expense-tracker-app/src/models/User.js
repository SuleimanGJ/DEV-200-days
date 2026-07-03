import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = Schema({
    username: String,
    email: {type: String, required: true, unique: true},
    password: {type: String}
}, {timestamps: true});



const userModel = mongoose.model("user", userSchema);


export {userModel}