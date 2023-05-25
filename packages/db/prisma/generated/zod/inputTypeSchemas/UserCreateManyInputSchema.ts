import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string(),
  name: z.string()
}).strict();

export default UserCreateManyInputSchema;
