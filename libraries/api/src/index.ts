import type { Elysia } from "elysia";
import { router } from "./routes";
import { setup } from "./setup";
import type { BasePath } from "./config";
export * from "./setup";

export { router };
const app = setup<Elysia<BasePath>>(router as unknown as Elysia);

export default app;
