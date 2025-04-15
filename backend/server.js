import express from 'express';;
import cors from 'cors';
import dotenv from 'dotenv';
import BookRoutes from './routes/BookRoutes.js';
import connectDb from './middleware/db.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
connectDb();



app.use('/api/book',BookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})
