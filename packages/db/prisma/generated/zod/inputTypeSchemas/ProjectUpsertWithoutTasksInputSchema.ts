import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUpdateWithoutTasksInputSchema } from './ProjectUpdateWithoutTasksInputSchema';
import { ProjectUncheckedUpdateWithoutTasksInputSchema } from './ProjectUncheckedUpdateWithoutTasksInputSchema';
import { ProjectCreateWithoutTasksInputSchema } from './ProjectCreateWithoutTasksInputSchema';
import { ProjectUncheckedCreateWithoutTasksInputSchema } from './ProjectUncheckedCreateWithoutTasksInputSchema';

export const ProjectUpsertWithoutTasksInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutTasksInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutTasksInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTasksInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutTasksInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default ProjectUpsertWithoutTasksInputSchema;
