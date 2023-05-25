import { router } from "../trpc";
import { taskRouter } from "./task";
import { projectRouter } from "./project";
import { authRouter } from "./auth";
import { userRouter } from "./user";

export const appRouter = router({
  task: taskRouter,
  project: projectRouter,
  auth: authRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
