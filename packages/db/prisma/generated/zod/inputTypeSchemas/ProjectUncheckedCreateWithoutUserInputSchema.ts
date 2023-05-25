import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUncheckedCreateNestedManyWithoutProjectInputSchema } from './TaskUncheckedCreateNestedManyWithoutProjectInputSchema';

export const ProjectUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export default ProjectUncheckedCreateWithoutUserInputSchema;
