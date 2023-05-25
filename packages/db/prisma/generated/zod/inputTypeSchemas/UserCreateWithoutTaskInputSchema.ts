import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedManyWithoutUserInputSchema } from './ProjectCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutTaskInputSchema: z.ZodType<Prisma.UserCreateWithoutTaskInput> = z.object({
  id: z.string(),
  name: z.string(),
  Project: z.lazy(() => ProjectCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutTaskInputSchema;
