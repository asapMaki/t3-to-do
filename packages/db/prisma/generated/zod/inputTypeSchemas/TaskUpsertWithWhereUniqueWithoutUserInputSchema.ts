import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWhereUniqueInputSchema } from './TaskWhereUniqueInputSchema';
import { TaskUpdateWithoutUserInputSchema } from './TaskUpdateWithoutUserInputSchema';
import { TaskUncheckedUpdateWithoutUserInputSchema } from './TaskUncheckedUpdateWithoutUserInputSchema';
import { TaskCreateWithoutUserInputSchema } from './TaskCreateWithoutUserInputSchema';
import { TaskUncheckedCreateWithoutUserInputSchema } from './TaskUncheckedCreateWithoutUserInputSchema';

export const TaskUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TaskUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TaskWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TaskUpdateWithoutUserInputSchema),z.lazy(() => TaskUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TaskCreateWithoutUserInputSchema),z.lazy(() => TaskUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default TaskUpsertWithWhereUniqueWithoutUserInputSchema;
