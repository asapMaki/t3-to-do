import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutTaskInputSchema } from './UserCreateWithoutTaskInputSchema';
import { UserUncheckedCreateWithoutTaskInputSchema } from './UserUncheckedCreateWithoutTaskInputSchema';
import { UserCreateOrConnectWithoutTaskInputSchema } from './UserCreateOrConnectWithoutTaskInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutTaskInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTaskInputSchema),z.lazy(() => UserUncheckedCreateWithoutTaskInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTaskInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutTaskInputSchema;
