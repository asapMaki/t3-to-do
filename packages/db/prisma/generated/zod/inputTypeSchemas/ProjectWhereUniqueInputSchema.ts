import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectWhereUniqueInputSchema: z.ZodType<Prisma.ProjectWhereUniqueInput> = z.object({
  id: z.string().optional(),
  name: z.string().optional()
}).strict();

export default ProjectWhereUniqueInputSchema;
