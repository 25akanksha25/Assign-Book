import express from 'express';
const router = express.Router();

import {addBook , getBook} from '../controller/BookController.js'

router.post('/add',addBook);
router.get('/',getBook);


export default router;

