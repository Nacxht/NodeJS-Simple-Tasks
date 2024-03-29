import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema(
	{
		title: {
			type: String,
			minLength: 3,
			maxLength: 20,
			required: true,
		},

		description: {
			type: String,
			minLength: 3,
			maxLength: 150,
		},
	},
	{ timestamps: true }
);

export const Task = mongoose.model("Tasks", taskSchema);
