import { Router } from "express";
import { exerciseRouter } from "./exercisesRouter";

const router = Router();

router.use(exerciseRouter)

export { router };