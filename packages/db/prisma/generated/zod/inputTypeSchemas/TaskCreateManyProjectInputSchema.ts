import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskCreateManyProjectInputSchema: z.ZodType<Prisma.TaskCreateManyProjectInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completed: z.boolean().optional(),
  userId: z.string().optional().nullable()
}).strict();

export default TaskCreateManyProjectInputSchema;
