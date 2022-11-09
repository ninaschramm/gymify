import { Router } from "express";
import { exerciseSchema } from "../schemas/exerciseSchemas";
import { validateSchema } from "../middlewares/ValidateSchema";
import { registerExercise, getAllExercises, getExerciseById} from "../controllers/exercisesControllers";

const exerciseRouter = Router();

exerciseRouter.post("/exercises", validateSchema(exerciseSchema), registerExercise)
exerciseRouter.get("/exercises", getAllExercises)
exerciseRouter.get(`/exercises/:id`, getExerciseById)

 export { exerciseRouter };