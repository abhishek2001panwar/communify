import express from 'express';
const router = express.Router();
import { createPost ,getPosts, getOnePost      } from '../controllers/post.controller.js';
import { ensureAuthenticated } from '../middleware/islogged.js';
import { upload } from '../utils/multer.js';

router.post('/createpost',  upload.single('image'),  ensureAuthenticated,createPost);
router.get('/getposts',  ensureAuthenticated, getPosts);
router.get('/getOnePost/:id',  getOnePost);



export { router };