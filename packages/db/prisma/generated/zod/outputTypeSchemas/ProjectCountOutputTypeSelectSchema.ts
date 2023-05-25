import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ProjectCountOutputTypeSelectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> = z.object({
  tasks: z.boolean().optional(),
}).strict();

export default ProjectCountOutputTypeSelectSchema;
