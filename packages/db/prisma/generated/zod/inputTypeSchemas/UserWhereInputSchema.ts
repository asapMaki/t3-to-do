import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { TaskListRelationFilterSchema } from './TaskListRelationFilterSchema';
import { ProjectListRelationFilterSchema } from './ProjectListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Task: z.lazy(() => TaskListRelationFilterSchema).optional(),
  Project: z.lazy(() => ProjectListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;
