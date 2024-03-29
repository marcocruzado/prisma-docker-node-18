import { Router } from "express";
import { GetUsers,GetUsersById} from "../controllers/Users.controller.js";

const Users = Router();

Users.get("/", GetUsers);
Users.get('/:id',GetUsersById)

export default Users;
