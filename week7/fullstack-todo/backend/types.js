import zod from "zod";

const createTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
})
const updateTodoSchema = zod.object({
    id: zod.string()
})

export {createTodoSchema, updateTodoSchema};