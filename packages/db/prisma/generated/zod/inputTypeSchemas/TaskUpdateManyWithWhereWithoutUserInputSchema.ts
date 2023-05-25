import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskScalarWhereInputSchema } from './TaskScalarWhereInputSchema';
import { TaskUpdateManyMutationInputSchema } from './TaskUpdateManyMutationInputSchema';
import { TaskUncheckedUpdateManyWithoutTaskInputSchema } from './TaskUncheckedUpdateManyWithoutTaskInputSchema';

export const TaskUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TaskUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => TaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateManyMutationInputSchema),z.lazy(() => TaskUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default TaskUpdateManyWithWhereWithoutUserInputSchema;
