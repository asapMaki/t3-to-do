import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskScalarWhereInputSchema } from './TaskScalarWhereInputSchema';
import { TaskUpdateManyMutationInputSchema } from './TaskUpdateManyMutationInputSchema';
import { TaskUncheckedUpdateManyWithoutTasksInputSchema } from './TaskUncheckedUpdateManyWithoutTasksInputSchema';

export const TaskUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => TaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateManyMutationInputSchema),z.lazy(() => TaskUncheckedUpdateManyWithoutTasksInputSchema) ]),
}).strict();

export default TaskUpdateManyWithWhereWithoutProjectInputSchema;
