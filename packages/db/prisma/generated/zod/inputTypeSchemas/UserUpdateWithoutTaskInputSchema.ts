import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ProjectUpdateManyWithoutUserNestedInputSchema } from './ProjectUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutTaskInputSchema: z.ZodType<Prisma.UserUpdateWithoutTaskInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Project: z.lazy(() => ProjectUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutTaskInputSchema;
