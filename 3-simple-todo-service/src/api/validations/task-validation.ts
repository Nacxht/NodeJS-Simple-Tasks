import Joi from "joi";

export const taskValidation = Joi.object({
	title: Joi.string().required().min(3).max(20),
	description: Joi.string().min(3).max(150),
});

export const taskIdValidation = Joi.object({
	taskId: Joi.string().alphanum(),
});
