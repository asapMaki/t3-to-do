import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProjectUncheckedCreateWithoutTasksInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutTasksInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().optional().nullable()
}).strict();

export default ProjectUncheckedCreateWithoutTasksInputSchema;
