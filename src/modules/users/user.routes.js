import express from "express";
import { signUp, singnIn, verfiyAccount } from "./user.controller.js";

import { checkEmail } from "../../middleware/checkEmail.js";

const userRoutes = express.Router();



userRoutes.post("/signUp",checkEmail,signUp)
userRoutes.post("/signIn",singnIn)
userRoutes.get("/verfiy/:email",verfiyAccount)











export default userRoutes;

