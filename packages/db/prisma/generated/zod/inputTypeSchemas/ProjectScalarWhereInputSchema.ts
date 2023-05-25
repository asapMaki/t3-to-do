import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const ProjectScalarWhereInputSchema: z.ZodType<Prisma.ProjectScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectScalarWhereInputSchema),z.lazy(() => ProjectScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectScalarWhereInputSchema),z.lazy(() => ProjectScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default ProjectScalarWhereInputSchema;
