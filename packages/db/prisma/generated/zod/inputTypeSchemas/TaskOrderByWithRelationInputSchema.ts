import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';

export const TaskOrderByWithRelationInputSchema: z.ZodType<Prisma.TaskOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  completed: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  Project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TaskOrderByWithRelationInputSchema;
