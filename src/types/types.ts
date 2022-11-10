import { Exercise, Workout } from "@prisma/client";

export type exerciseData = Omit<Exercise, "id">
export type workoutData = Omit<Workout, "id">