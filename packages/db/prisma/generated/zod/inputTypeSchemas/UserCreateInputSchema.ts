import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedManyWithoutUserInputSchema } from './TaskCreateNestedManyWithoutUserInputSchema';
import { ProjectCreateNestedManyWithoutUserInputSchema } from './ProjectCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  Task: z.lazy(() => TaskCreateNestedManyWithoutUserInputSchema).optional(),
  Project: z.lazy(() => ProjectCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
