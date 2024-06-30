import express from "express";
import dotenv from "dotenv";


import authRoutes from "./routes/AuthRoutes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
    connectToMongoDB(),
    console.log(`Server running on port : ${PORT}`);
  });