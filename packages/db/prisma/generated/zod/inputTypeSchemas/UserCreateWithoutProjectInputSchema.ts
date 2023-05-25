import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedManyWithoutUserInputSchema } from './TaskCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutProjectInputSchema: z.ZodType<Prisma.UserCreateWithoutProjectInput> = z.object({
  id: z.string(),
  username: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  Task: z.lazy(() => TaskCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutProjectInputSchema;
