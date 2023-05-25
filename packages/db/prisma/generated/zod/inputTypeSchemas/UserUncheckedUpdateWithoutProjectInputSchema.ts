import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TaskUncheckedUpdateManyWithoutUserNestedInputSchema } from './TaskUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateWithoutProjectInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Task: z.lazy(() => TaskUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutProjectInputSchema;
