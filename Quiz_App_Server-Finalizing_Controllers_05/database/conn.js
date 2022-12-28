import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect('mongodb+srv://ayushkedia:kedi%40YUSH05@cluster0.3bemq.mongodb.net/natours')
    console.log("Database Connected")
}