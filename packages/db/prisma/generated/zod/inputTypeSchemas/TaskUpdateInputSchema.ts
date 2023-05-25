import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutTaskNestedInputSchema } from './UserUpdateOneWithoutTaskNestedInputSchema';
import { ProjectUpdateOneWithoutTasksNestedInputSchema } from './ProjectUpdateOneWithoutTasksNestedInputSchema';

export const TaskUpdateInputSchema: z.ZodType<Prisma.TaskUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  completed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateOneWithoutTaskNestedInputSchema).optional(),
  Project: z.lazy(() => ProjectUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();

export default TaskUpdateInputSchema;
