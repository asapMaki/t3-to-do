import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFindManyArgsSchema } from "../outputTypeSchemas/TaskFindManyArgsSchema"
import { ProjectFindManyArgsSchema } from "../outputTypeSchemas/ProjectFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  Task: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  Project: z.union([z.boolean(),z.lazy(() => ProjectFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
