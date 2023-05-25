import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutTasksInputSchema } from './ProjectCreateWithoutTasksInputSchema';
import { ProjectUncheckedCreateWithoutTasksInputSchema } from './ProjectUncheckedCreateWithoutTasksInputSchema';
import { ProjectCreateOrConnectWithoutTasksInputSchema } from './ProjectCreateOrConnectWithoutTasksInputSchema';
import { ProjectUpsertWithoutTasksInputSchema } from './ProjectUpsertWithoutTasksInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateWithoutTasksInputSchema } from './ProjectUpdateWithoutTasksInputSchema';
import { ProjectUncheckedUpdateWithoutTasksInputSchema } from './ProjectUncheckedUpdateWithoutTasksInputSchema';

export const ProjectUpdateOneWithoutTasksNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutTasksInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutTasksInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateWithoutTasksInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneWithoutTasksNestedInputSchema;
