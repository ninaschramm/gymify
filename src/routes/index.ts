import { Router } from "express";
import { exerciseRouter } from "./exercisesRouter";
import { workoutRouter } from "./workoutRouter";

const router = Router();

router.use(exerciseRouter, workoutRouter)

export { router };