import mongoose from "mongoose";
import { config } from "../config.js";
import { logger } from "../../api/utils/winston.js";

export const mongoInit = () => {
	mongoose
		.connect(config.mongo.url, { retryWrites: true, w: "majority" })
		.then(() => {
			logger.info(`Running on ENV = ${config.server.env}`);
			logger.info(`Connected to MongoDB`);
		})
		.catch((err) => {
			logger.error("Unable to connect MongoDB");
			throw err;
		});
};
