import { Request, Response } from "express";
import { logger } from "../utils/winston.js";
import { taskCreateService, taskDeleteService, taskIndexService } from "../services/task-services.js";
import { taskIdValidation, taskValidation } from "../validations/task-validation.js";

export const taskIndex = async (req: Request, res: Response) => {
	try {
		const tasks = await taskIndexService();

		res.status(201).json({
			status: true,
			message: "Success get tasks data",
			tasks: tasks,
		});
	} catch (err) {
		logger.error(err);
		res.status(500).json({
			status: false,
			message: "An error occured",
			error: err,
		});
	}
};

export const taskCreate = async (req: Request, res: Response) => {
	try {
		const data = await taskValidation.validateAsync(req.body);
		await taskCreateService(data.title, data.description);

		res.status(201).json({
			status: true,
			message: "Success created a new task",
		});
	} catch (err) {
		logger.error(err);
		res.status(500).json({
			status: false,
			message: "An error occured",
			error: err,
		});
	}
};

// export const taskUpdate = async (req: Request, res: Response) => {};

export const taskDelete = async (req: Request, res: Response) => {
	try {
		const data = await taskIdValidation.validateAsync(req.body);
		await taskDeleteService(data.taskId);

		res.status(201).json({
			status: true,
			message: "Successfully deleted a task",
		});
	} catch (err) {
		logger.error(err);
		res.status(500).json({
			status: false,
			message: "An error occured",
			error: err,
		});
	}
};
