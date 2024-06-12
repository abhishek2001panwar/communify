import {Post} from "../models/post.model.js";
import {User} from "../models/user.model.js";



export const createPost = async (req, res) => {
    const {
      title,
      description,
      image,
      location,
      openingTime,
      closingTime,
    } = req.body;
  
    try {
      // Get the creator ID from the request parameters
      const creator = req.params.id;

      // Find the user by ID
      const user = await User.findById(creator);
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      // Create a new post
      const newPost = new Post({
        title,
        description,
        image,
        location,
        openingTime,
        closingTime,
        creator,
      });
  
      // Save the new post to the database
      await newPost.save();
  
      // Add the post ID to the user's posts array
      user.posts.push(newPost._id);
      
      // Save the updated user to the database
      await user.save();
  
      // Respond with the created post
      res.status(200).json({ msg: "Post created", post: newPost });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "Server error" });
    }
  };

  