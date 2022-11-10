import { WorkoutType } from '@prisma/client';
import * as workoutRepository from '../repositories/workoutRepository';
import { workoutData } from '../types/types';

export async function registerWorkout(workout: {
    type: WorkoutType,
}) {    
    const { type } = workout
    const workoutData: workoutData = {
        type
    }

    await workoutRepository.insert(workoutData)
}

export async function getAllWorkouts() {

    const workouts = await workoutRepository.getAllWorkouts();    
    return workouts

}

export async function getWorkoutById(id: number) {

    const workout = await workoutRepository.getWorkoutById(id)
    return workout

}

export async function deleteWorkout(id: number) {
    
    await workoutRepository.deleteWorkout(id)
    
}

export async function addExerciseToWorkout(exerciseId: number, workoutId: number) {

    await workoutRepository.addExerciseToWorkout(exerciseId, workoutId)

}