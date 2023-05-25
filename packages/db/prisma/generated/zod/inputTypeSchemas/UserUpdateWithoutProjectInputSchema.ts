import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TaskUpdateManyWithoutUserNestedInputSchema } from './TaskUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutProjectInputSchema: z.ZodType<Prisma.UserUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Task: z.lazy(() => TaskUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutProjectInputSchema;
