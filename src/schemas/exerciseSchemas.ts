import Joi, { ObjectSchema } from 'joi';
import { exerciseData } from '../types/types';

const exerciseSchema: ObjectSchema = Joi.object<exerciseData>({
    name: Joi.string().required().messages({
        'string.empty': "Todos os campos são obrigatórios",
        'any.required': "Todos os campos são obrigatórios",}),
    description: Joi.string().required().messages({
        'string.empty': "Todos os campos são obrigatórios",
        'any.required': "Todos os campos são obrigatórios"})
})

export { exerciseSchema }