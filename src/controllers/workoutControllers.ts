import * as workoutServices from "../services/workoutServices"
import { Request, Response } from "express";

export async function registerWorkout(req: Request, res: Response) {
    
    const workout = req.body;

    await workoutServices.registerWorkout(workout)
    return res.sendStatus(201)
}

export async function getAllworkouts(req: Request, res: Response) {
    
    const workouts = await workoutServices.getAllWorkouts()
    return res.status(200).send(workouts)

}

export async function getworkoutById(req: Request, res: Response) {

    const id: number = parseInt(req.params.id);
    const workout = await workoutServices.getWorkoutById(id)    
    return res.status(200).send(workout)

}

export async function deleteWorkout(req: Request, res: Response) {
    
    const id: number = parseInt(req.params.id);
    await workoutServices.deleteWorkout(id);
    return res.sendStatus(204)
    
}

export async function addExerciseToWorkout(req: Request, res: Response) {

    const workoutId = parseInt(req.params.id);
    const exerciseId = req.body.id;
    await workoutServices.addExerciseToWorkout(exerciseId, workoutId)
    return res.sendStatus(201)
    
}