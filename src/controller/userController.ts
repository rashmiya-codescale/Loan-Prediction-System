import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService, saveUserService } from "../services/userService";

export const getAllUsers = async (req: Request, res: Response) => {try {
  const users = await getAllUsersService();
  console.log(users);
  res.send(users);
} catch (error) {
  res.status(400);
}};


export const getUser = async (req: Request, res: Response) => {
  try {
      const user = await getUserByIdService(req.params.user_email);
      console.log(user);
      res.send(user);
  } catch (error) {
    res.status(400);
  }
};

export const saveUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
      const savedUser = await saveUserService(req.body);
      console.log(savedUser);
      res.send(savedUser);
  } catch (error) {
    res.status(400);
  }
};

// export const updateUser = async (req: Request, res: Response) => {
//   try {
//     const updatedUser = await updateUserService(req.body);
//     res.send(updatedUser);
//   } catch (error) {
//     res.status(400);
//   }
// };