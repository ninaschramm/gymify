import * as exerciseServices from "../services/exerciseServices"
import { Request, Response } from "express";

export async function registerExercise(req: Request, res: Response) {
    
    const exercise = req.body;

    await exerciseServices.registerExercise(exercise)
    return res.sendStatus(201)
}

export async function getAllExercises(req: Request, res: Response) {
    
    const exercises = exerciseServices.getAllExercises()
    return res.status(200).send(exercises)

}

export async function getExerciseById(req: Request, res: Response) {

    const id: number = parseInt(req.params.id);
    const exercise = exerciseServices.getExerciseById(id)
    return res.status(200).send(exercise)
    
}