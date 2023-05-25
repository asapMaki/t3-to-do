import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TaskOrderByRelationAggregateInputSchema } from './TaskOrderByRelationAggregateInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';

export const ProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tasks: z.lazy(() => TaskOrderByRelationAggregateInputSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProjectOrderByWithRelationInputSchema;
