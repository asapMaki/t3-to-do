import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutProjectInputSchema } from './UserCreateWithoutProjectInputSchema';
import { UserUncheckedCreateWithoutProjectInputSchema } from './UserUncheckedCreateWithoutProjectInputSchema';
import { UserCreateOrConnectWithoutProjectInputSchema } from './UserCreateOrConnectWithoutProjectInputSchema';
import { UserUpsertWithoutProjectInputSchema } from './UserUpsertWithoutProjectInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutProjectInputSchema } from './UserUpdateWithoutProjectInputSchema';
import { UserUncheckedUpdateWithoutProjectInputSchema } from './UserUncheckedUpdateWithoutProjectInputSchema';

export const UserUpdateOneWithoutProjectNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProjectInputSchema),z.lazy(() => UserUncheckedCreateWithoutProjectInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProjectInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProjectInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutProjectInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProjectInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutProjectNestedInputSchema;
