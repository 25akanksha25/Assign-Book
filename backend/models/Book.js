import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title:{ type:String , required:true},
    author : { type:String, required:true},
    genre : { type:String, required:true},
},{timestamps:true});

const Book = new mongoose.model('Book',BookSchema);

export default Book;   