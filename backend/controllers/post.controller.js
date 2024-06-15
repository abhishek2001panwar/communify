import { Post } from "../models/post.model.js";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";

// export const createPost = async (req, res) => {
//   const { title, description, location, openingTime, closingTime } = req.body;
//   const image = req.file;

//   try {
//     // Find the user who created the post
//     const user = await User.findById(req.user._id);

//     // Create a new post
//     const newPost = new Post({
//       title,
//       description,
//       image: `/uploads/${image.filename}`,
//       location,
//       openingTime,
//       closingTime,
//       creator: req.user._id,
//     });

//     // Save the new post to the database
//     await newPost.save();

//     // Add the post ID to the user's posts array
//     user.posts.push(newPost._id);

//     // Save the updated user to the database
//     await user.save();

//     // Respond with the created post
//     res.status(201).json({ msg: "Post created", post: newPost });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// };
export const createPost = async (req, res) => {
  const { title, description, location, openingTime, closingTime } = req.body;
  const image = req.file;

  try {
    // Upload image to Cloudinary
    const cloudinaryUpload = await cloudinary.uploader.upload(image.path);

    // Find the user who created the post
    const user = await User.findById(req.user._id);

    // Create a new post with Cloudinary URL
    const newPost = new Post({
      title,
      description,
      image: cloudinaryUpload.secure_url, // Store the Cloudinary URL
      location,
      openingTime,
      closingTime,
      creator: req.user._id,
    });

    // Save the new post to the database
    
    // Add the post ID to the user's posts array
    await newPost.save();
     user.posts.push(newPost._id);

    // Save the updated user to the database
    await user.save();

    // Respond with the created post
    res.status(201).json({ msg: "Post created", post: newPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getPosts = async (req, res) => {

    try {
      const posts = await Post.find({ creator: req.user._id }).populate("creator");
        res.send({
            posts,
            message: " all posts fetched successfully",
        });
    } catch (error) {
        console.log("error in fetching posts", error);
    }
}
export const getOnePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        
        res.send({
            post,
            message: "post fetched successfully",
        });
    } catch (error) {
        console.log("error in fetching post", error);
    }
}
