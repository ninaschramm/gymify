import { Router } from "express";
import { validateSchema } from "../middlewares/ValidateSchema";
import { registerWorkout, getAllworkouts, getworkoutById, deleteWorkout } from "../controllers/workoutControllers";

const workoutRouter = Router();

workoutRouter.post("/workouts", registerWorkout)
workoutRouter.get("/workouts", getAllworkouts)
workoutRouter.get(`/workouts/:id`, getworkoutById)
workoutRouter.delete(`/workouts/:id`, deleteWorkout)


 export { workoutRouter };