import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutProjectInputSchema } from './UserCreateWithoutProjectInputSchema';
import { UserUncheckedCreateWithoutProjectInputSchema } from './UserUncheckedCreateWithoutProjectInputSchema';

export const UserCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutProjectInputSchema),z.lazy(() => UserUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutProjectInputSchema;
