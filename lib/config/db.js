import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://Ajay:123@cluster0.voeaitv.mongodb.net/todo-app');
    console.log("Connected to database");
}
 
