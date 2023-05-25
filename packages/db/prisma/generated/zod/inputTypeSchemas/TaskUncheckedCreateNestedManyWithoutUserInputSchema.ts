import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateWithoutUserInputSchema } from './TaskCreateWithoutUserInputSchema';
import { TaskUncheckedCreateWithoutUserInputSchema } from './TaskUncheckedCreateWithoutUserInputSchema';
import { TaskCreateOrConnectWithoutUserInputSchema } from './TaskCreateOrConnectWithoutUserInputSchema';
import { TaskCreateManyUserInputEnvelopeSchema } from './TaskCreateManyUserInputEnvelopeSchema';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';

export const TaskUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TaskUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TaskCreateWithoutUserInputSchema),z.lazy(() => TaskCreateWithoutUserInputSchema).array(),z.lazy(() => TaskUncheckedCreateWithoutUserInputSchema),z.lazy(() => TaskUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskCreateOrConnectWithoutUserInputSchema),z.lazy(() => TaskCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskWhereUniqueInputSchema),z.lazy(() => TaskWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TaskUncheckedCreateNestedManyWithoutUserInputSchema;
