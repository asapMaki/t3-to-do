import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskCountOrderByAggregateInputSchema } from './TaskCountOrderByAggregateInputSchema';
import { TaskMaxOrderByAggregateInputSchema } from './TaskMaxOrderByAggregateInputSchema';
import { TaskMinOrderByAggregateInputSchema } from './TaskMinOrderByAggregateInputSchema';

export const TaskOrderByWithAggregationInputSchema: z.ZodType<Prisma.TaskOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  completed: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TaskCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TaskMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TaskMinOrderByAggregateInputSchema).optional()
}).strict();

export default TaskOrderByWithAggregationInputSchema;
