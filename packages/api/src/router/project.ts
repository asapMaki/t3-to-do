import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const projectRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.project.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.project.findFirst({ where: { id: input } });
  }),
  create: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.project.create({ data: input });
    }),
});
