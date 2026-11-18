import express from "express";
import authRouter from "./routes/auth.routes.js";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello i am backend insta api");
});

app.use("/api/auth", authRouter);



export default app;