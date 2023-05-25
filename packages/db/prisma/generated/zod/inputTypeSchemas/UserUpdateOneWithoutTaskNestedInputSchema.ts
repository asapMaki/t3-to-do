import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutTaskInputSchema } from './UserCreateWithoutTaskInputSchema';
import { UserUncheckedCreateWithoutTaskInputSchema } from './UserUncheckedCreateWithoutTaskInputSchema';
import { UserCreateOrConnectWithoutTaskInputSchema } from './UserCreateOrConnectWithoutTaskInputSchema';
import { UserUpsertWithoutTaskInputSchema } from './UserUpsertWithoutTaskInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutTaskInputSchema } from './UserUpdateWithoutTaskInputSchema';
import { UserUncheckedUpdateWithoutTaskInputSchema } from './UserUncheckedUpdateWithoutTaskInputSchema';

export const UserUpdateOneWithoutTaskNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutTaskNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTaskInputSchema),z.lazy(() => UserUncheckedCreateWithoutTaskInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTaskInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTaskInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutTaskInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTaskInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutTaskNestedInputSchema;
