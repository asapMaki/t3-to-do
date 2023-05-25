import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutProjectInputSchema } from './TaskCreateWithoutProjectInputSchema';
import { TaskUncheckedCreateWithoutProjectInputSchema } from './TaskUncheckedCreateWithoutProjectInputSchema';
import { TaskCreateOrConnectWithoutProjectInputSchema } from './TaskCreateOrConnectWithoutProjectInputSchema';
import { TaskUpsertWithWhereUniqueWithoutProjectInputSchema } from './TaskUpsertWithWhereUniqueWithoutProjectInputSchema';
import { TaskCreateManyProjectInputEnvelopeSchema } from './TaskCreateManyProjectInputEnvelopeSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithWhereUniqueWithoutProjectInputSchema } from './TaskUpdateWithWhereUniqueWithoutProjectInputSchema';
import { TaskUpdateManyWithWhereWithoutProjectInputSchema } from './TaskUpdateManyWithWhereWithoutProjectInputSchema';
import { TaskScalarWhereInputSchema } from './TaskScalarWhereInputSchema';

export const TaskUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutProjectInputSchema),z.lazy(() => TaskCreateWithoutProjectInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutProjectInputSchema),z.lazy(() => TaskUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutProjectInputSchema),z.lazy(() => TaskCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TaskUncheckedUpdateManyWithoutProjectNestedInputSchema;
