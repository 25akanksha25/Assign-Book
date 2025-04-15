import Book from "../models/Book.js";
// const Book = require('../models/Book');

export const addBook = async(req,res) =>{
    try{
        const {title,author,genre} = req.body;
        const book = await Book.create({title,author,genre});
        res.status(200).json(book);

    }
    catch(err){
        res.status(500).json({error:'Failes to add book'});
    }
    

};

export const getBook = async(req,res)=>
{
    try{
        const books = await Book.find({});
        res.status(200).json(books);

    }
    catch(err)
    {
        res.status(500).json({error:'Failed to fetch books'});
    }
}

