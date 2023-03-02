import express from "express";
import authRouters from "./routes/auth.js";
import postRouters from "./routes/posts.js";
import userRouters from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();
app.use(express.json());
app.use(cookieParser());

// https://www.npmjs.com/package/multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRouters);
app.use("/api/posts", postRouters);
app.use("/api/users", userRouters);

app.listen(8800, () => {
  console.log("express work");
});
