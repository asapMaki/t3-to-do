import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskIncludeSchema } from '../inputTypeSchemas/TaskIncludeSchema'
import { TaskWhereUniqueInputSchema } from '../inputTypeSchemas/TaskWhereUniqueInputSchema'
import { TaskCreateInputSchema } from '../inputTypeSchemas/TaskCreateInputSchema'
import { TaskUncheckedCreateInputSchema } from '../inputTypeSchemas/TaskUncheckedCreateInputSchema'
import { TaskUpdateInputSchema } from '../inputTypeSchemas/TaskUpdateInputSchema'
import { TaskUncheckedUpdateInputSchema } from '../inputTypeSchemas/TaskUncheckedUpdateInputSchema'
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

export const TaskUpsertArgsSchema: z.ZodType<Prisma.TaskUpsertArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  where: TaskWhereUniqueInputSchema,
  create: z.union([ TaskCreateInputSchema,TaskUncheckedCreateInputSchema ]),
  update: z.union([ TaskUpdateInputSchema,TaskUncheckedUpdateInputSchema ]),
}).strict()

export default TaskUpsertArgsSchema;
