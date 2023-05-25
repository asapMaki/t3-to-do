import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TaskUpdateManyWithoutProjectNestedInputSchema } from './TaskUpdateManyWithoutProjectNestedInputSchema';
import { UserUpdateOneWithoutProjectNestedInputSchema } from './UserUpdateOneWithoutProjectNestedInputSchema';

export const ProjectUpdateInputSchema: z.ZodType<Prisma.ProjectUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tasks: z.lazy(() => TaskUpdateManyWithoutProjectNestedInputSchema).optional(),
  User: z.lazy(() => UserUpdateOneWithoutProjectNestedInputSchema).optional()
}).strict();

export default ProjectUpdateInputSchema;
