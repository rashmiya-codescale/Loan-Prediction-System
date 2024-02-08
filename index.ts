import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes";
import mongoose from "mongoose";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

//mongoDb connection
const url = `mongodb+srv://${process.env.MONGO_db}:${process.env.MONGO_PASSWORD}@cluster0.wrec2ax.mongodb.net/`;
mongoose.connect(url);
const con = mongoose.connection;
con.on("error", console.error.bind(console, "MongoDB connection error:"));
con.once("open", () => {
  console.log("MongoDB connected successfully");
});
