import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutTaskInputSchema } from './UserCreateNestedOneWithoutTaskInputSchema';

export const TaskCreateWithoutProjectInputSchema: z.ZodType<Prisma.TaskCreateWithoutProjectInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completed: z.boolean().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutTaskInputSchema).optional()
}).strict();

export default TaskCreateWithoutProjectInputSchema;
