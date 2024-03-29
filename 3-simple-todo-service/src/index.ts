import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "./config/config.js";
import { mongoInit } from "./config/databases/mongo-conn.js";
import { routeInit } from "./api/routes/init.js";
import { logger } from "./api/utils/winston.js";

const app: Express = express();

const main = () => {
	try {
		if (config.server.env === "local" || config.server.env === "development") app.use(cors());
		app.use(bodyParser.json());

		mongoInit();
		routeInit(app);

		app.listen(config.server.port, () => logger.info(`Server running at "${config.server.url}${config.server.port}"`));
	} catch (err) {
		logger.error("An error happened");
		logger.error(err);
	}
};

main();
