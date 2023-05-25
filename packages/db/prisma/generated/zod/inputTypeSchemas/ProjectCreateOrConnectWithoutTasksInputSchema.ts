import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutTasksInputSchema } from './ProjectCreateWithoutTasksInputSchema';
import { ProjectUncheckedCreateWithoutTasksInputSchema } from './ProjectUncheckedCreateWithoutTasksInputSchema';

export const ProjectCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutTasksInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutTasksInputSchema;
