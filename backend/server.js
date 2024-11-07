import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

//File Imports
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import {app,server} from "./socket/socket.js";



dotenv.config();

const __dirname = path.resolve();

const PORT=process.env.PORT || 5000;


//This is our middleware

app.use(express.json()); //allows to extract the fields from request body.To parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res)=>{
//     // root route http://localhost:5000/
//     res.send("Hello");
// });

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});
