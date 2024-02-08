import express from "express";
import { getAllUsers, getUser, saveUser } from "../controller/userController";
const route = express.Router();

route.get("/", getAllUsers);
route.get("/getUser/:user_email", getUser);
route.post("/", saveUser);



export default route;