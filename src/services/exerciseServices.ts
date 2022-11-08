import * as exerciseRepository from '../repositories/exerciseRepository';
import { exerciseData } from '../types/types';

export async function registerExercise(exercise:any) {
    
    const {name, description} = exercise
    const exerciseData: exerciseData = {
        name,
        description
    }

    await exerciseRepository.insert(exerciseData)
}