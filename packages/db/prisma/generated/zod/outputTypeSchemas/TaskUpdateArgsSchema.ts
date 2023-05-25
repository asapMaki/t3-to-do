import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskIncludeSchema } from '../inputTypeSchemas/TaskIncludeSchema'
import { TaskUpdateInputSchema } from '../inputTypeSchemas/TaskUpdateInputSchema'
import { TaskUncheckedUpdateInputSchema } from '../inputTypeSchemas/TaskUncheckedUpdateInputSchema'
import { TaskWhereUniqueInputSchema } from '../inputTypeSchemas/TaskWhereUniqueInputSchema'
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

export const TaskUpdateArgsSchema: z.ZodType<Prisma.TaskUpdateArgs> = z.object({
  select: TaskSelectSchema.optional(),
  include: TaskIncludeSchema.optional(),
  data: z.union([ TaskUpdateInputSchema,TaskUncheckedUpdateInputSchema ]),
  where: TaskWhereUniqueInputSchema,
}).strict()

export default TaskUpdateArgsSchema;
