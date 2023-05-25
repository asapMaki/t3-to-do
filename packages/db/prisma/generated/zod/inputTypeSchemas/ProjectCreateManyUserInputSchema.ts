import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectCreateManyUserInputSchema: z.ZodType<Prisma.ProjectCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ProjectCreateManyUserInputSchema;
