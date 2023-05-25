import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskCreateWithoutProjectInputSchema } from './TaskCreateWithoutProjectInputSchema';
import { TaskUncheckedCreateWithoutProjectInputSchema } from './TaskUncheckedCreateWithoutProjectInputSchema';

export const TaskCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskCreateWithoutProjectInputSchema),z.lazy(() => TaskUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default TaskCreateOrConnectWithoutProjectInputSchema;
