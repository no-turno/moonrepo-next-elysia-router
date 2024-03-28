import { setup, router } from "api";
import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

const api = setup(router as unknown as Elysia);

const app = new Elysia()
	.use(swagger())
	.get("/", () => Response.redirect("/swagger", 302))
	.use(api)
	.listen(
		{
			port: process.env.PORT,
		},
		(c) => {
			console.log(`${c.url.toString()}`);
		},
	);
