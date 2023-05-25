import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectUpdateManyWithoutUserNestedInputSchema } from './ProjectUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutTaskInputSchema: z.ZodType<Prisma.UserUpdateWithoutTaskInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profileImageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Project: z.lazy(() => ProjectUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutTaskInputSchema;
