import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin1User:ZzPUjiRx2y8q0Lls@cluster1.jlmcjaa.mongodb.net/basic-paytm");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});

const accountSchema = new Schema({
    userId: {type: ObjectId, ref: "User", required: true},
    balance: {type: Number, required: true}
})

const User = mongoose.model("User", UserSchema);
const Account = mongoose.model("Account", accountSchema);

export { User, Account };