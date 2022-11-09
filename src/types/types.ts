import { Exercise } from "@prisma/client";

export type exerciseData = Omit<Exercise, "id">

export interface NumberStringTuple extends Array<string|number>{0:number; 1:string}