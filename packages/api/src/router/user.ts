import { UserSchema } from "./../../../db/prisma/generated/zod/modelSchema/UserSchema";
import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { protectedProcedure } from "../trpc";

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
  create: protectedProcedure
    .input(UserSchema)
    .output(UserSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.user.create({ data: input });
    }), 
  byId: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/users/{id}",
        tags: ["user"],
        summary: "Get user by id",
      },
    })
    .input(z.object({ id: z.string() }))
    .output(z.union([UserSchema, z.null()]))
    .query(async ({ ctx, input }) => {
      const projects = await ctx.prisma.project.findMany({
        where: {
          userId: input.id,
        },
      });
      const user = await ctx.prisma.user.findFirst({ where: { id: input.id } });
      return {
        ...user,
        projects,
      }
});
