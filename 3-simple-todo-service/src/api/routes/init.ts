import { Application, Router } from "express";
import { taskRouter } from "./tasks.js";

const routes: Array<[string, Router]> = [["task", taskRouter]];

export const routeInit = (app: Application) => {
	routes.forEach((route) => {
		const [url, router] = route;
		app.use(`/api/${url}`, router);
	});
};
