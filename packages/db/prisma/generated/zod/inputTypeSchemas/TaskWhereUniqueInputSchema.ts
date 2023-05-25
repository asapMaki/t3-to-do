import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TaskWhereUniqueInputSchema: z.ZodType<Prisma.TaskWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export default TaskWhereUniqueInputSchema;
