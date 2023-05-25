import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutTaskInputSchema } from './UserCreateNestedOneWithoutTaskInputSchema';
import { ProjectCreateNestedOneWithoutTasksInputSchema } from './ProjectCreateNestedOneWithoutTasksInputSchema';

export const TaskCreateInputSchema: z.ZodType<Prisma.TaskCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completed: z.boolean().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutTaskInputSchema).optional(),
  Project: z.lazy(() => ProjectCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();

export default TaskCreateInputSchema;
