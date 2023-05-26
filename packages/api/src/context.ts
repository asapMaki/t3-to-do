import { prisma } from "@acme/db";
import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import type {
  SignedInAuthObject,
  SignedOutAuthObject,
} from "@clerk/nextjs/api";

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
type AuthContextProps = {
  auth: SignedInAuthObject | SignedOutAuthObject;
};

/** Use this helper for:
 *  - testing, where we dont have to Mock Next.js' req/res
 *  - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://beta.create.t3.gg/en/usage/trpc#-servertrpccontextts
 */
export const createContextInner = async ({ auth }: AuthContextProps) => {
  async function createUser() {
    const { userId } = auth;
    const user = userId ? await clerkClient.users.getUser(userId) : null;
    const userExists = await prisma.user.findUnique({
      where: {
        id: user?.id,
      },
    });
    console.log("userExists", userExists);
    if (!userExists && !!user) {
      const pris = await prisma.user.create({
        data: {
          id: user?.id,
          username: user?.username,
          profileImageUrl: user?.profileImageUrl,
        },
      });
      console.log("userExists pris", pris);
    }
    return;
  }

  await createUser();

  return {
    auth,
    prisma,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
  return await createContextInner({ auth: getAuth(opts.req) });
};

export type Context = inferAsyncReturnType<typeof createContext>;
