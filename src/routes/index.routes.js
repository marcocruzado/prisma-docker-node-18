import { Router } from "express";
import { RenderHomePage } from "../controllers/Index.controllers.js";

const Pages = Router();

Pages.get("/", RenderHomePage)

export default Pages;
