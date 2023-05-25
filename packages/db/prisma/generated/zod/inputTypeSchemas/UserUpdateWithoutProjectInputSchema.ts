import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TaskUpdateManyWithoutUserNestedInputSchema } from './TaskUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutProjectInputSchema: z.ZodType<Prisma.UserUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Task: z.lazy(() => TaskUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutProjectInputSchema;
