import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Hello, TypeScript + Node.js!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
