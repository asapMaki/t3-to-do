import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutProjectInputSchema } from './UserUpdateWithoutProjectInputSchema';
import { UserUncheckedUpdateWithoutProjectInputSchema } from './UserUncheckedUpdateWithoutProjectInputSchema';
import { UserCreateWithoutProjectInputSchema } from './UserCreateWithoutProjectInputSchema';
import { UserUncheckedCreateWithoutProjectInputSchema } from './UserUncheckedCreateWithoutProjectInputSchema';

export const UserUpsertWithoutProjectInputSchema: z.ZodType<Prisma.UserUpsertWithoutProjectInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutProjectInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutProjectInputSchema),z.lazy(() => UserUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default UserUpsertWithoutProjectInputSchema;
