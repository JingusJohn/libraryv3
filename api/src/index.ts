import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { z, ZodError } from "zod";
import { environmentSchema, Environment } from "./models/utilities";
import { appRouter } from "./routers/root";

dotenv.config();
// load any environment variables from .env

// validate .env configuration using zod
let env: Environment = environmentSchema.parse(process.env);

const app: Express = express();

app.use("/", createExpressMiddleware({ router: appRouter }));

app.listen(env.PORT, () => {{
  console.log(`API Server running at port: ${env.PORT}`);
}})

export type AppRouter = typeof appRouter;
