import { ProjectSchema } from "./../../../db/prisma/generated/zod/modelSchema/ProjectSchema";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const projectRouter = router({
  all: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/projects",
        tags: ["project"],
        summary: "Get all projects",
      },
    })
    .input(z.void())
    .output(z.array(ProjectSchema))
    .query(({ ctx }) => {
      return ctx.prisma.project.findMany();
    }),
  byId: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/projects/{id}",
        tags: ["project"],
        summary: "Get project by id",
      },
    })
    .input(z.object({ id: z.string().uuid() }))
    .output(z.union([ProjectSchema, z.null()]))
    .query(({ ctx, input }) => {
      return ctx.prisma.project.findFirst({ where: { id: input.id } });
    }),
  create: protectedProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/projects",
        tags: ["project"],
        summary: "Create project",
      },
    })

    .input(z.object({ name: z.string() }))
    .output(ProjectSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.project.create({ data: input });
    }),
});
