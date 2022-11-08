import * as exerciseServices from "../services/exerciseServices"
import { Request, Response } from "express";

export async function registerExercise(req: Request, res: Response) {
    
    const exercise = req.body;

    await exerciseServices.registerExercise(exercise)
    return res.sendStatus(201)
}