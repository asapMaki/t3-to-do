import { z } from 'zod';

/////////////////////////////////////////
// TASK SCHEMA
/////////////////////////////////////////

export const TaskSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  completed: z.boolean(),
  userId: z.string().nullable(),
  projectId: z.string().nullable(),
})

export type Task = z.infer<typeof TaskSchema>

export default TaskSchema;
