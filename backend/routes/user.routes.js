import express from "express";
const router = express.Router();

import {
    registerUser,
    loginUser,
  updateUser,
  deleteUser,
  getOneUser,
    logout,
    allUsers,
    getAuthStatus,
    profileController
} from "../controllers/user.controller.js";
import { ensureAuthenticated } from "../middleware/islogged.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getusers", allUsers);
router.get('/profile', ensureAuthenticated, profileController);


router.get("/getusers/:id", getOneUser);
router.put("/updateuser", updateUser);
router.delete("/deleteuser", deleteUser);
router.get("/auth-status", getAuthStatus);

export { router };

