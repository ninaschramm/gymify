import { string } from 'joi';
import * as exerciseRepository from '../repositories/exerciseRepository';
import { exerciseData, NumberStringTuple } from '../types/types';

export async function registerExercise(exercise: {
    name: string,
    description: string
}) {    
    const {name, description} = exercise
    const exerciseData: exerciseData = {
        name,
        description
    }

    await exerciseRepository.insert(exerciseData)
}

export async function getAllExercises() {

    const exercises = exerciseRepository.getAllExercises()    
    return exercises

}

export async function getExerciseById(id: number) {

    const exercise = exerciseRepository.getExerciseById(id)
    return exercise
    
}