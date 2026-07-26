import z from 'zod';

export const validateTodoSchema = z.object({
    title: zod.string(),
    description: zod.string(),
})