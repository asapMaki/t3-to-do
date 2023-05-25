import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TaskUncheckedUpdateManyWithoutUserNestedInputSchema } from './TaskUncheckedUpdateManyWithoutUserNestedInputSchema';
import { ProjectUncheckedUpdateManyWithoutUserNestedInputSchema } from './ProjectUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Task: z.lazy(() => TaskUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Project: z.lazy(() => ProjectUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateInputSchema;
