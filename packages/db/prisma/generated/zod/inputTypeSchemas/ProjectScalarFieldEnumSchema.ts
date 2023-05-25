import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt','userId']);

export default ProjectScalarFieldEnumSchema;
