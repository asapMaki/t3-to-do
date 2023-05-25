import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string(),
  username: z.string().optional().nullable(),
  profileImageUrl: z.string().optional().nullable()
}).strict();

export default UserCreateManyInputSchema;
