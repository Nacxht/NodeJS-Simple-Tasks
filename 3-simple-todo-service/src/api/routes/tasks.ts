import { Router } from "express";
import { taskCreate, taskDelete, taskIndex } from "../controllers/taks-controllers.js";
export const taskRouter: Router = Router();

taskRouter.get("/", taskIndex);
taskRouter.post("/create", taskCreate);
taskRouter.delete("/delete", taskDelete);

// taskRouter.patch("/edit", taskUpdate);
