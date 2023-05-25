import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"

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

export default TaskSelectSchema;
