import express from 'express';
const router = express.Router();
import { createPost } from '../controllers/post.controller.js';
import { ensureAuthenticated } from '../middleware/islogged.js';

router.post('/createpost/:id', ensureAuthenticated,createPost);


export { router };