import express from "express";
import dotenv from "dotenv";


import authRoutes from "./routes/AuthRoutes.js";
import messageRoutes from "./routes/MessageRoutes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

app.listen(PORT, () => {
    connectToMongoDB(),
    console.log(`Server running on port : ${PORT}`);
  });