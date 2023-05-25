import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateManyUserInputSchema } from './ProjectCreateManyUserInputSchema';

export const ProjectCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ProjectCreateManyUserInputEnvelope> = z.object({
  data: z.lazy(() => ProjectCreateManyUserInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectCreateManyUserInputEnvelopeSchema;
