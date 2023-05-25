import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completed: z.boolean().optional(),
  userId: z.string().optional().nullable()
}).strict();

export default TaskUncheckedCreateWithoutProjectInputSchema;
