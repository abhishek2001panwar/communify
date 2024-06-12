import express from "express";
const router = express.Router();

import { createContact } from "../controllers/contact.controller.js";
import { ensureAuthenticated } from "../middleware/islogged.js";

router.post("/createcontact", ensureAuthenticated ,createContact);

export { router };