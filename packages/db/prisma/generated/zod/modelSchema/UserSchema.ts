import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  username: z.string().nullable(),
  profileImageUrl: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
