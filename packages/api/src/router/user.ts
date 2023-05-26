import { UserSchema } from "./../../../db/prisma/generated/zod/modelSchema/UserSchema";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  all: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/users",
        tags: ["user"],
        summary: "Get all users",
      },
    })
    .input(z.void())
    .output(z.array(UserSchema))
    .query(({ ctx }) => {
      return ctx.prisma.user.findMany();
    }),
});
