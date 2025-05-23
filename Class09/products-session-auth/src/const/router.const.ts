import { Router } from "express";
import { authRouter } from "../routes/auth.routes";
import { sessionValidator } from "../middlewares/session-validator.middleware";
import { productsRouter } from "../routes/products.routes";

export const globalRouter = Router();

globalRouter.use("/auth", authRouter);
globalRouter.use("/products", sessionValidator, productsRouter);
