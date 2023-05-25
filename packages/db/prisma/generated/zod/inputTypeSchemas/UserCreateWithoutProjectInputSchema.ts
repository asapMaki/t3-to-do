import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedManyWithoutUserInputSchema } from './TaskCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutProjectInputSchema: z.ZodType<Prisma.UserCreateWithoutProjectInput> = z.object({
  id: z.string(),
  name: z.string(),
  Task: z.lazy(() => TaskCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutProjectInputSchema;
