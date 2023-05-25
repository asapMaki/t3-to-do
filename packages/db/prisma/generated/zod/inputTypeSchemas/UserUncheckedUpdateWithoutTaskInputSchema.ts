import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ProjectUncheckedUpdateManyWithoutUserNestedInputSchema } from './ProjectUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateWithoutTaskInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTaskInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Project: z.lazy(() => ProjectUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutTaskInputSchema;
