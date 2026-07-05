import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const adminSchema = Schema({
    username: String,
    email: {type: String, unique: true},
    password: String
})
const userSchema = Schema({
    username: String,
    email: {type: String, unique: true},
    password: String
})

const Admin = mongoose.model("admin", adminSchema);
const User = mongoose.model("user", userSchema);


export { Admin, User};