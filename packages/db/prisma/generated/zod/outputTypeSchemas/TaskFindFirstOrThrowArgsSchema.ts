import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskIncludeSchema } from '../inputTypeSchemas/TaskIncludeSchema'
import { TaskWhereInputSchema } from '../inputTypeSchemas/TaskWhereInputSchema'
import { TaskOrderByWithRelationInputSchema } from '../inputTypeSchemas/TaskOrderByWithRelationInputSchema'
import { TaskWhereUniqueInputSchema } from '../inputTypeSchemas/TaskWhereUniqueInputSchema'
import { TaskScalarFieldEnumSchema } from '../inputTypeSchemas/TaskScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskSelectSchema: z.ZodType<Prisma.TaskSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  completed: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  userId: z.boolean().optional(),
  Project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  projectId: z.boolean().optional(),
}).strict()

export const TaskFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TaskFindFirstOrThrowArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereInputSchema.optional(),
  orderBy: z.union([ TaskOrderByWithRelationInputSchema.array(),TaskOrderByWithRelationInputSchema ]).optional(),
  cursor: TaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TaskScalarFieldEnumSchema.array().optional(),
}).strict()

export default TaskFindFirstOrThrowArgsSchema;
