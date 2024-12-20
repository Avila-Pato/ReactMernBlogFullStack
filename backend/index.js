import express from "express"
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors"




const app =  express()
app.use(cors(process.env.FRONT_URL))
app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter)
app.use(express.json());
// console.log(process.env.MONGO)

// app.get("/test", (req, res) => {
//     res.status(200).send("It works")
// })

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);


// Middlewares apra manejo de errores
app.use((error, req, res, next) => {
    res.status(error.status || 500);
  
    res.json({
      message: error.message || "Something went wrong!",
      status: error.status,
      stack: error.stack,
    });
  });

app.listen(3000, () => {
    connectDB();
    console.log('Server is Running')
})