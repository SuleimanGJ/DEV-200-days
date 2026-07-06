import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const adminSchema = new Schema({
    username: String,
    email: {type: String, unique: true},
    password: String
})
const userSchema = new Schema({
    username: String,
    email: {type: String, unique: true},
    password: String
})

const courseSchema = new Schema({
    title: String,
    description: String,
    imageUrl: String,
    price: Number,
    createrId: {type: ObjectId, ref: "admin"}
})

const purchaseSchema = new Schema({
    userId: {type: ObjectId, ref: "user"},
    courseId: {type: ObjectId, ref: "course"}
})


const Admin = mongoose.model("admin", adminSchema);
const User = mongoose.model("user", userSchema);
const Course = mongoose.model("course", courseSchema);
const Purchase = mongoose.model("purchase", purchaseSchema);


export { Admin, User, Course, Purchase};