import { client } from '../db/prisma'
import { workoutData } from '../types/types';

export async function insert(workout: workoutData) {
    await client.workout.create({
        data: workout
    });
}

export async function getAllWorkouts() {
    const workouts = await client.workout.findMany({        
    })

    return workouts
}   

export async function getWorkoutById(id: number) {
    const workout = await client.workout.findFirst({
        where: {
            id
        }
    })

    return workout
}

export async function deleteWorkout(id: number) {

    const deleteUser = await client.workout.delete({
        where: {
          id
        }
      })      
    
}

export async function addExerciseToWorkout(exerciseId: number, workoutId: number) {

    await client.workout_Exercise.create({
        data: {
            workoutId,
            exerciseId,
        }
    });

}