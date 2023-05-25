import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  Task: z.boolean().optional(),
  Project: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
