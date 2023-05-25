import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutTaskInputSchema } from './UserCreateWithoutTaskInputSchema';
import { UserUncheckedCreateWithoutTaskInputSchema } from './UserUncheckedCreateWithoutTaskInputSchema';

export const UserCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTaskInputSchema),z.lazy(() => UserUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutTaskInputSchema;
