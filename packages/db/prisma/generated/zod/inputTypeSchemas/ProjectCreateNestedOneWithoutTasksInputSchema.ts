import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutTasksInputSchema } from './ProjectCreateWithoutTasksInputSchema';
import { ProjectUncheckedCreateWithoutTasksInputSchema } from './ProjectUncheckedCreateWithoutTasksInputSchema';
import { ProjectCreateOrConnectWithoutTasksInputSchema } from './ProjectCreateOrConnectWithoutTasksInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTasksInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutTasksInputSchema;
