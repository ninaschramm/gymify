import { client } from '../db/prisma'
import { exerciseData } from '../types/types';

export async function insert(exercise: exerciseData) {
    await client.exercise.create({
        data: exercise
    });
}

export async function getAllExercises() {
    const exercises = await client.exercise.findMany({
        select: {
            id: true,
            name: true
        }
    })

    return exercises
}   

export async function getExerciseById(id: number) {
    const exercise = await client.exercise.findFirst({
        where: {
            id
        }
    })
}