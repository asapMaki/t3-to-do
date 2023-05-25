import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const TaskWhereInputSchema: z.ZodType<Prisma.TaskWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskWhereInputSchema),z.lazy(() => TaskWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  completed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default TaskWhereInputSchema;
