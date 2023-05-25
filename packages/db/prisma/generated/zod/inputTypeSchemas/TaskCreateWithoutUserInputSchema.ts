import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedOneWithoutTasksInputSchema } from './ProjectCreateNestedOneWithoutTasksInputSchema';

export const TaskCreateWithoutUserInputSchema: z.ZodType<Prisma.TaskCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completed: z.boolean().optional(),
  Project: z.lazy(() => ProjectCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();

export default TaskCreateWithoutUserInputSchema;
