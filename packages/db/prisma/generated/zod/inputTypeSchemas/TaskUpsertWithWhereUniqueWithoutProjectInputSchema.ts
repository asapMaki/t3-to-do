import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithoutProjectInputSchema } from './TaskUpdateWithoutProjectInputSchema';
import { TaskUncheckedUpdateWithoutProjectInputSchema } from './TaskUncheckedUpdateWithoutProjectInputSchema';
import { TaskCreateWithoutProjectInputSchema } from './TaskCreateWithoutProjectInputSchema';
import { TaskUncheckedCreateWithoutProjectInputSchema } from './TaskUncheckedCreateWithoutProjectInputSchema';

export const TaskUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskUpdateWithoutProjectInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutProjectInputSchema),z.lazy(() => TaskUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default TaskUpsertWithWhereUniqueWithoutProjectInputSchema;
