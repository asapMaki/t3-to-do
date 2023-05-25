import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completed: z.boolean().optional(),
  projectId: z.string().optional().nullable()
}).strict();

export default TaskUncheckedCreateWithoutUserInputSchema;
