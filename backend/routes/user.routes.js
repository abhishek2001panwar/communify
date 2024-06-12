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
    getAuthStatus
} from "../controllers/user.controller.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getusers", allUsers);
router.get("/getusers/:id", getOneUser);
router.put("/updateuser", updateUser);
router.delete("/deleteuser", deleteUser);
router.get("/auth-status", getAuthStatus);

export { router };

