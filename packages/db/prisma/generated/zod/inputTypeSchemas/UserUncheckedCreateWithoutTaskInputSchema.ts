import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUncheckedCreateNestedManyWithoutUserInputSchema } from './ProjectUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTaskInput> = z.object({
  id: z.string(),
  name: z.string(),
  Project: z.lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutTaskInputSchema;
