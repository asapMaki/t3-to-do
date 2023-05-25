import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutTaskInputSchema } from './UserUpdateWithoutTaskInputSchema';
import { UserUncheckedUpdateWithoutTaskInputSchema } from './UserUncheckedUpdateWithoutTaskInputSchema';
import { UserCreateWithoutTaskInputSchema } from './UserCreateWithoutTaskInputSchema';
import { UserUncheckedCreateWithoutTaskInputSchema } from './UserUncheckedCreateWithoutTaskInputSchema';

export const UserUpsertWithoutTaskInputSchema: z.ZodType<Prisma.UserUpsertWithoutTaskInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTaskInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTaskInputSchema),z.lazy(() => UserUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default UserUpsertWithoutTaskInputSchema;
