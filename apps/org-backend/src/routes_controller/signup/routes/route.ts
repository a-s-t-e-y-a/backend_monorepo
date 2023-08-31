import express ,{ Router} from "express";
import { createUser } from "../contorller/createController";
const singUp :Router = express.Router()

singUp.post('/create',createUser)

export default singUp