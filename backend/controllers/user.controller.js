import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import passport from "passport";
import { Post } from "../models/post.model.js";
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  let errors = [];

  if (!name || !email || !password) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();
    res.status(200).json({ msg: "User registered", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const loginUser = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ msg: "No user exists" });

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.status(200).json({ msg: "Successfully Authenticated", user: user });
    });
  })(req, res, next);
};
export const logout = async (req, res) => {
  try {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ msg: "Server error" });
      }
      res.status(200).json({ msg: "User logged out" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send({
      user,
      message: "User fetched by id successfully",
    });
  } catch (error) {
    console.log("error in fetching users", error);
  }
};
export const allUsers = async (req, res) => {
  try {
    const users = await User.find().populate("posts");
    res.send({
      users,

      message: " all Users fetched successfully",
    });
  } catch (error) {
    console.log("error in fetching users", error);
  }
};
export const updateUser = () => {
  // Function implementation
};

export const deleteUser = () => {
  // Function implementation
};

export const profileController = async (req, res) => {
  
    try {
      // Fetch user data from the database based on req.user.id (assuming the user ID is stored in the token)
      const user = await User.findById(req.user.id).select("-password"); // Exclude password for security

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      // Fetch posts created by the current user
      const posts = await Post.find({ user: req.user.id });

      res.json({ user, posts });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  };


export const getAuthStatus = (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ isLoggedIn: true });
  } else {
    return res.status(200).json({ isLoggedIn: false });
  }
};
