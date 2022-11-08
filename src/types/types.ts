import { Exercise } from "@prisma/client";

export type exerciseData = Omit<Exercise, "id">