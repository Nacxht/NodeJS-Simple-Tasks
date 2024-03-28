// 28 March 2024

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { stringValidation } from "./validators.js";

const app = express();
const port = 3000;

const main = () => {
	app.use(bodyParser.json());
	app.use(cors());

	app.post("/api/string-counter", async (req, res) => {
		const data = await stringValidation.validateAsync(req.body);
		let result = [];

		try {
			data.string.forEach((word) => {
				if (typeof word !== undefined) {
					result.push(word.length);
				} else {
					result.push(0);
				}
			});

			res.status(201).json({
				message: result,
			});
			console.log(result);
		} catch (err) {
			res.status(401).json({
				message: "An error happened",
			});
		}
	});

	app.use((req, res, next) => {
		next(createHttpError(404));
	});

	app.listen(port, () => console.log(`[Server]: Server is running at "http://localhost:3000"`));
};

main();
