import { Router } from "express";
import { exerciseSchema } from "../schemas/exerciseSchemas";
import { validateSchema } from "../middlewares/ValidateSchema";
import { registerExercise, getAllExercises, getExerciseById, updateExercise, deleteExercise } from "../controllers/exercisesControllers";

const exerciseRouter = Router();

exerciseRouter.post("/exercises", validateSchema(exerciseSchema), registerExercise)
exerciseRouter.get("/exercises", getAllExercises)
exerciseRouter.get(`/exercises/:id`, getExerciseById)
exerciseRouter.post(`/exercises/:id`, validateSchema(exerciseSchema), updateExercise)
exerciseRouter.delete(`/exercises/:id`, deleteExercise)


 export { exerciseRouter };