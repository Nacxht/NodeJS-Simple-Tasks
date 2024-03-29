import { Task } from "../models/task.js";
import { logger } from "../utils/winston.js";

export const taskIndexService = async () => {
	try {
		const data = await Task.find({});
		return data;
	} catch (err) {
		logger.error("Can't get tasks data");
		throw err;
	}
};

export const taskCreateService = async (title: string, description: string) => {
	try {
		const newTask = new Task({ title, description });
		await newTask.save();
	} catch (err) {
		logger.error("Failed to create a new task");
		throw err;
	}
};

export const taskDeleteService = async (taskId: number) => {
	try {
		await Task.findByIdAndDelete(taskId);
	} catch (err) {
		logger.error(`Failed to delete task with ID: ${taskId}`);
		throw err;
	}
};
