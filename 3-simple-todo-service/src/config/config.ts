import dotenv from "dotenv";
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "";
const BASE_URL = process.env.BASE_URL || "";
const MONGO_URL = process.env.MONGO_URL || "";

export const config = {
	mongo: {
		url: MONGO_URL,
	},
	server: {
		port: SERVER_PORT,
		env: NODE_ENV,
		url: BASE_URL,
	},
};
