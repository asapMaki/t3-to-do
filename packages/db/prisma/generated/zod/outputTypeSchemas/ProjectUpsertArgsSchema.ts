import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectIncludeSchema } from '../inputTypeSchemas/ProjectIncludeSchema'
import { ProjectWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectWhereUniqueInputSchema'
import { ProjectCreateInputSchema } from '../inputTypeSchemas/ProjectCreateInputSchema'
import { ProjectUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectUncheckedCreateInputSchema'
import { ProjectUpdateInputSchema } from '../inputTypeSchemas/ProjectUpdateInputSchema'
import { ProjectUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectUncheckedUpdateInputSchema'
import { TaskFindManyArgsSchema } from "../outputTypeSchemas/TaskFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProjectCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectSelectSchema: z.ZodType<Prisma.ProjectSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  userId: z.boolean().optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProjectUpsertArgsSchema: z.ZodType<Prisma.ProjectUpsertArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereUniqueInputSchema,
  create: z.union([ ProjectCreateInputSchema,ProjectUncheckedCreateInputSchema ]),
  update: z.union([ ProjectUpdateInputSchema,ProjectUncheckedUpdateInputSchema ]),
}).strict()

export default ProjectUpsertArgsSchema;
