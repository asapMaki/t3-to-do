import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectIncludeSchema } from '../inputTypeSchemas/ProjectIncludeSchema'
import { ProjectWhereInputSchema } from '../inputTypeSchemas/ProjectWhereInputSchema'
import { ProjectOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectOrderByWithRelationInputSchema'
import { ProjectWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectWhereUniqueInputSchema'
import { ProjectScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectScalarFieldEnumSchema'
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

export const ProjectFindManyArgsSchema: z.ZodType<Prisma.ProjectFindManyArgs> = z.object({
  select: ProjectSelectSchema.optional(),
  include: ProjectIncludeSchema.optional(),
  where: ProjectWhereInputSchema.optional(),
  orderBy: z.union([ ProjectOrderByWithRelationInputSchema.array(),ProjectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProjectScalarFieldEnumSchema.array().optional(),
}).strict()

export default ProjectFindManyArgsSchema;
