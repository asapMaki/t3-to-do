import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedManyWithoutUserInputSchema } from './ProjectCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutTaskInputSchema: z.ZodType<Prisma.UserCreateWithoutTaskInput> = z.object({
  id: z.string(),
  username: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable(),
  Project: z.lazy(() => ProjectCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutTaskInputSchema;
