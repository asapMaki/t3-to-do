import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskCreateManyInputSchema: z.ZodType<Prisma.TaskCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completed: z.boolean().optional(),
  userId: z.string().optional().nullable(),
  projectId: z.string().optional().nullable()
}).strict();

export default TaskCreateManyInputSchema;
