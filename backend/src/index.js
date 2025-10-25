import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";

dotenv.config();
const app = express();

// Middleware

app.use(express.json());
app.use(cors());

dotenv.config();
connectDB();
//user
import authRoutes from "./routes/auth.route.js";
app.use('/user',authRoutes)

import productRoutes from "./routes/product.route.js";
app.use('/products',productRoutes);

//product

// API Test Route ✅
app.get("/", (req, res) => {
  res.send("Backend server is running ✅");
});




// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
