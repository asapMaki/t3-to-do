import TaskSchema from "./../../../db/prisma/generated/zod/modelSchema/TaskSchema";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const taskRouter = router({
  all: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/tasks",
        tags: ["task"],
        summary: "Get all tasks",
      },
    })
    .input(z.void())
    .output(z.array(TaskSchema))
    .query(({ ctx }) => {
      return ctx.prisma.task.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    }),
  byId: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/tasks/{id}",
        tags: ["task"],
        summary: "Get task by id",
      },
    })
    .input(z.object({ id: z.string().uuid() }))
    .output(z.union([TaskSchema, z.null()]))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.task.findFirst({ where: { id: input.id } });
    }),
  create: protectedProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/tasks",
        tags: ["task"],
        summary: "Create task",
      },
    })
    .input(z.object({ name: z.string() }))
    .output(TaskSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.task.create({
        data: {
          ...input,
          userId: ctx.auth.userId,
        },
      });
    }),
  delete: protectedProcedure
    .meta({
      openapi: {
        method: "DELETE",
        path: "/tasks/{id}",
        tags: ["task"],
        summary: "Delete task",
      },
    })
    .input(z.object({ id: z.string().uuid() }))
    .output(z.boolean())
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.task.delete({ where: { id: input.id } });
        return true;
      } catch (e) {
        return false;
      }
    }),
  update: protectedProcedure
    .meta({
      openapi: {
        method: "PUT",
        path: "/tasks/{id}",
        tags: ["task"],
        summary: "Update task",
      },
    })
    .input(z.object({ id: z.string().uuid(), name: z.string() }))
    .output(TaskSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.task.update({
        where: { id: input.id },
        data: { name: input.name },
      });
    }),
});
