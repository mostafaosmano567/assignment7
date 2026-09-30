import { Router } from "express";
import * as US from "./users.service.js";
const userrouter = Router();

userrouter.post("/signup", US.signup);
userrouter.post("/login", US.login); 
userrouter.put("/update", US.update);
userrouter.delete("/delete",US.deleteUser);
userrouter.get("/find",US.getUser)

export default userrouter;