import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithoutUserInputSchema } from './TaskUpdateWithoutUserInputSchema';
import { TaskUncheckedUpdateWithoutUserInputSchema } from './TaskUncheckedUpdateWithoutUserInputSchema';

export const TaskUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateWithoutUserInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default TaskUpdateWithWhereUniqueWithoutUserInputSchema;
