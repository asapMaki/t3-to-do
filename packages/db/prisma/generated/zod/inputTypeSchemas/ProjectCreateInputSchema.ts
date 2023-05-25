import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedManyWithoutProjectInputSchema } from './TaskCreateNestedManyWithoutProjectInputSchema';
import { UserCreateNestedOneWithoutProjectInputSchema } from './UserCreateNestedOneWithoutProjectInputSchema';

export const ProjectCreateInputSchema: z.ZodType<Prisma.ProjectCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutProjectInputSchema).optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutProjectInputSchema).optional()
}).strict();

export default ProjectCreateInputSchema;
