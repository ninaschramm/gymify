import * as exerciseServices from "../services/exerciseServices"
import { Request, Response } from "express";

export async function registerExercise(req: Request, res: Response) {
    
    const exercise = req.body;

    await exerciseServices.registerExercise(exercise)
    return res.sendStatus(201)
}

export async function getAllExercises(req: Request, res: Response) {
    
    const exercises = await exerciseServices.getAllExercises()
    return res.status(200).send(exercises)

}

export async function getExerciseById(req: Request, res: Response) {

    const id: number = parseInt(req.params.id);
    const exercise = await exerciseServices.getExerciseById(id)    
    return res.status(200).send(exercise)

}

export async function updateExercise(req: Request, res: Response) {

    const id: number = parseInt(req.params.id);
    const exercise = req.body;

    await exerciseServices.updateExercise(id, exercise)
    return res.sendStatus(201)

}