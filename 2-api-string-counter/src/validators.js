import Joi from "joi";

export const stringValidation = Joi.object({
	string: Joi.array().items(Joi.string()),
});
