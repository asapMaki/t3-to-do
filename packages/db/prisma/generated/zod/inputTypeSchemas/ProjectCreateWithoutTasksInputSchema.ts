import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutProjectInputSchema } from './UserCreateNestedOneWithoutProjectInputSchema';

export const ProjectCreateWithoutTasksInputSchema: z.ZodType<Prisma.ProjectCreateWithoutTasksInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();

export default ProjectCreateWithoutTasksInputSchema;
