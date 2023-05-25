import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateManyProjectInputSchema } from './TaskCreateManyProjectInputSchema';

export const TaskCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.TaskCreateManyProjectInputEnvelope> = z.object({
  data: z.lazy(() => TaskCreateManyProjectInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TaskCreateManyProjectInputEnvelopeSchema;
