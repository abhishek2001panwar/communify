import express from 'express';
const router = express.Router();
import { createPost } from '../controllers/post.controller.js';
import { ensureAuthenticated } from '../middleware/islogged.js';
import { upload } from '../utils/multer.js';

router.post('/createpost',  upload.single('image'),  ensureAuthenticated,createPost);


export { router };