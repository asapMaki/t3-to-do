import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TaskUpdateManyWithoutUserNestedInputSchema } from './TaskUpdateManyWithoutUserNestedInputSchema';
import { ProjectUpdateManyWithoutUserNestedInputSchema } from './ProjectUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Task: z.lazy(() => TaskUpdateManyWithoutUserNestedInputSchema).optional(),
  Project: z.lazy(() => ProjectUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateInputSchema;
