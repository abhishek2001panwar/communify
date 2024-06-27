import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import {configurePassport} from "./config/passport.js";
import { upload } from "./utils/multer.js";
import path from "path";
import { fileURLToPath } from "url";
import { connectdb } from "./config/db.js";
import { router as userRouter } from "./routes/user.routes.js";
import { router as postsRouter } from "./routes/post.routes.js";
import { router as contactRouter } from "./routes/contact.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

configurePassport(passport); // Passport configuration

connectdb();

//routes configuration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/contact", contactRouter);
app.use(express.static(path.join(__dirname, "/frontend/dist")));


//Deployment


app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/dist/index.html'))
);


app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
