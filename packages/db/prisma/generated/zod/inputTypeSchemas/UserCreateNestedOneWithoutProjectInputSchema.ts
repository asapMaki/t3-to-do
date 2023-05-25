import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutProjectInputSchema } from './UserCreateWithoutProjectInputSchema';
import { UserUncheckedCreateWithoutProjectInputSchema } from './UserUncheckedCreateWithoutProjectInputSchema';
import { UserCreateOrConnectWithoutProjectInputSchema } from './UserCreateOrConnectWithoutProjectInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutProjectInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProjectInputSchema),z.lazy(() => UserUncheckedCreateWithoutProjectInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProjectInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutProjectInputSchema;
