import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutUserInputSchema } from './TaskCreateWithoutUserInputSchema';
import { TaskUncheckedCreateWithoutUserInputSchema } from './TaskUncheckedCreateWithoutUserInputSchema';
import { TaskCreateOrConnectWithoutUserInputSchema } from './TaskCreateOrConnectWithoutUserInputSchema';
import { TaskUpsertWithWhereUniqueWithoutUserInputSchema } from './TaskUpsertWithWhereUniqueWithoutUserInputSchema';
import { TaskCreateManyUserInputEnvelopeSchema } from './TaskCreateManyUserInputEnvelopeSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithWhereUniqueWithoutUserInputSchema } from './TaskUpdateWithWhereUniqueWithoutUserInputSchema';
import { TaskUpdateManyWithWhereWithoutUserInputSchema } from './TaskUpdateManyWithWhereWithoutUserInputSchema';
import { TaskScalarWhereInputSchema } from './TaskScalarWhereInputSchema';

export const TaskUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TaskUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutUserInputSchema),z.lazy(() => TaskCreateWithoutUserInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutUserInputSchema),z.lazy(() => TaskUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutUserInputSchema),z.lazy(() => TaskCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TaskUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TaskUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TaskUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TaskUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TaskUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TaskUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TaskScalarWhereInputSchema),z.lazy(() => TaskScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TaskUncheckedUpdateManyWithoutUserNestedInputSchema;
