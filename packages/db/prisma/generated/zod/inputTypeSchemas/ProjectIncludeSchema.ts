import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFindManyArgsSchema } from "../outputTypeSchemas/TaskFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProjectCountOutputTypeArgsSchema"

export const ProjectIncludeSchema: z.ZodType<Prisma.ProjectInclude> = z.object({
  tasks: z.union([z.boolean(),z.lazy(() => TaskFindManyArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ProjectIncludeSchema;
