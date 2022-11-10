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

    const exercises = await exerciseRepository.getAllExercises();    
    return exercises

}

export async function getExerciseById(id: number) {

    const exercise = await exerciseRepository.getExerciseById(id)
    return exercise

}

export async function updateExercise(id: number, exercise: {
    name: string,
    description: string
}) {    
    const {name, description} = exercise
    const exerciseData: exerciseData = {
        name,
        description
    }

    await exerciseRepository.updateExercise(id, exercise)
}

export async function deleteExercise(id: number) {
    
    await exerciseRepository.deleteExercise(id)
    
}