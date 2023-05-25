import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithoutProjectInputSchema } from './TaskUpdateWithoutProjectInputSchema';
import { TaskUncheckedUpdateWithoutProjectInputSchema } from './TaskUncheckedUpdateWithoutProjectInputSchema';

export const TaskUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TaskUpdateWithoutProjectInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default TaskUpdateWithWhereUniqueWithoutProjectInputSchema;
