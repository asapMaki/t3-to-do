import { UserSchema } from "./../../../db/prisma/generated/zod/modelSchema/UserSchema";
import { router, publicProcedure } from "../trpc";
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
  // create: protectedProcedure
  //   .input(UserSchema)
  //   .output(UserSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.prisma.user.create({ data: input });
  //   }),
});
