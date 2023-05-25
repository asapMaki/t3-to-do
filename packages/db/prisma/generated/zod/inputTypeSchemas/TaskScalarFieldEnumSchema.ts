import { z } from 'zod';

export const TaskScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt','completed','userId','projectId']);

export default TaskScalarFieldEnumSchema;
