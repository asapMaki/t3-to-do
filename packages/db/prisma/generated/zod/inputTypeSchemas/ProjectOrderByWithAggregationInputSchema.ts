import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectCountOrderByAggregateInputSchema } from './ProjectCountOrderByAggregateInputSchema';
import { ProjectMaxOrderByAggregateInputSchema } from './ProjectMaxOrderByAggregateInputSchema';
import { ProjectMinOrderByAggregateInputSchema } from './ProjectMinOrderByAggregateInputSchema';

export const ProjectOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectMinOrderByAggregateInputSchema).optional()
}).strict();

export default ProjectOrderByWithAggregationInputSchema;
