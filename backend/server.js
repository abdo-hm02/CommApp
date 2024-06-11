import express from "express";
import dotenv from "dotenv";


import authRoutes from "./routes/AuthRoutes.js";


const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
  });