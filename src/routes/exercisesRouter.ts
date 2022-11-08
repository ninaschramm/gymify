import { Router } from "express";
import { exerciseSchema } from "../schemas/exerciseSchemas";
import { validateSchema } from "../middlewares/ValidateSchema";
import { registerExercise } from "../controllers/exercisesControllers";

const exerciseRouter = Router();

exerciseRouter.post("/exercises", validateSchema(exerciseSchema), registerExercise)

 export { exerciseRouter };