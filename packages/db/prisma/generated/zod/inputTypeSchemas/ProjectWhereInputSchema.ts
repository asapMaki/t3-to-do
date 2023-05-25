import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TaskListRelationFilterSchema } from './TaskListRelationFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const ProjectWhereInputSchema: z.ZodType<Prisma.ProjectWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectWhereInputSchema),z.lazy(() => ProjectWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tasks: z.lazy(() => TaskListRelationFilterSchema).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default ProjectWhereInputSchema;
