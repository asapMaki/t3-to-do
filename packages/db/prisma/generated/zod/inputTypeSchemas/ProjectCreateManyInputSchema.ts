import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectCreateManyInputSchema: z.ZodType<Prisma.ProjectCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().optional().nullable()
}).strict();

export default ProjectCreateManyInputSchema;
