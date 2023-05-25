import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateManyUserInputSchema } from './TaskCreateManyUserInputSchema';

export const TaskCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TaskCreateManyUserInputEnvelope> = z.object({
  data: z.lazy(() => TaskCreateManyUserInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TaskCreateManyUserInputEnvelopeSchema;
