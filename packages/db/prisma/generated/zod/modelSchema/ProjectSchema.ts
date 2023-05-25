import { z } from 'zod';

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

export const ProjectSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string().nullable(),
})

export type Project = z.infer<typeof ProjectSchema>

export default ProjectSchema;
