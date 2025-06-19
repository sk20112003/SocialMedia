import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"; 
import connectToMongoDB from "./db/connectToMongoDB.js";
import messagerouter from "./routes/message.route.js";
import userrouter from "./routes/user.route.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages",messagerouter);
app.use("/api/users",userrouter);





app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});
