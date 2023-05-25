import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutProjectInputSchema } from './TaskCreateWithoutProjectInputSchema';
import { TaskUncheckedCreateWithoutProjectInputSchema } from './TaskUncheckedCreateWithoutProjectInputSchema';
import { TaskCreateOrConnectWithoutProjectInputSchema } from './TaskCreateOrConnectWithoutProjectInputSchema';
import { TaskCreateManyProjectInputEnvelopeSchema } from './TaskCreateManyProjectInputEnvelopeSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutProjectInputSchema),z.lazy(() => TaskCreateWithoutProjectInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TaskUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TaskCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TaskUncheckedCreateNestedManyWithoutProjectInputSchema;
