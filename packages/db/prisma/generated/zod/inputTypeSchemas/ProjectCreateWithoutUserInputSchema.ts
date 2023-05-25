import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedManyWithoutProjectInputSchema } from './TaskCreateNestedManyWithoutProjectInputSchema';

export const ProjectCreateWithoutUserInputSchema: z.ZodType<Prisma.ProjectCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tasks: z.lazy(() => TaskCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export default ProjectCreateWithoutUserInputSchema;
