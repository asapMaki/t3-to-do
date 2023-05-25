import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskUncheckedCreateNestedManyWithoutUserInputSchema } from './TaskUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string(),
  name: z.string(),
  Task: z.lazy(() => TaskUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutProjectInputSchema;
