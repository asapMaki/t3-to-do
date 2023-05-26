import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";
import { useAuth, UserButton, useUser, useSession } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const TaskCard: React.FC<{
  task: inferProcedureOutput<AppRouter["task"]["all"]>[number];
}> = ({ task }) => {
  return (
    <div className="max-w-2xl rounded-lg border-2 border-gray-500 p-4 transition-all hover:scale-[101%]">
      <p>{task.id}</p>
      <h2 className="text-2xl font-bold text-[hsl(280,100%,70%)]">
        {task.name}
      </h2>
      <p>{task.completed}</p>
    </div>
  );
};

const Home: NextPage = () => {
  const [name, setName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const taskQuery = trpc.task.all.useQuery();

  const { mutate } = trpc.task.create.useMutation({
    async onSuccess() {
      await taskQuery.refetch();
    },
  });
  const addTask = async (
    // onSubmit: React.FormEventHandler<HTMLFormElement>
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (name.trim() !== "") {
      mutate({ name });
      setName("");
    }
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex  flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-8">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> Turbo
          </h1>
          <AuthShowcase />
          {/* create input to add task, with validation for empty */}
          <div className="flex flex-col gap-4">
            <form className="flex flex-col gap-4" onSubmit={addTask}>
              <input
                className="rounded-lg border-2 border-gray-500 bg-black p-4"
                placeholder="Task Name"
                type="text"
                value={name}
                onChange={handleInputChange}
              />
              <button
                className="rounded-lg border-2 border-gray-500 p-4"
                type="submit"
              >
                Add Task
              </button>
            </form>
          </div>

          <div
          // className="flex h-[60vh] justify-center overflow-y-scroll px-4 text-2xl"
          >
            {taskQuery.data ? (
              <div className="flex flex-col gap-4">
                {taskQuery.data?.map((p) => {
                  return <TaskCard key={p.id} task={p} />;
                })}
              </div>
            ) : (
              <p>Loading..</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { isSignedIn } = useUser();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined,
    { enabled: !!isSignedIn },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {isSignedIn && (
        <>
          <p className="text-center text-2xl text-white">
            {secretMessage && (
              <span>
                {" "}
                {secretMessage} click the user button!
                <br />
              </span>
            )}
          </p>
          <div className="flex items-center justify-center">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "3rem",
                    height: "3rem",
                  },
                },
              }}
            />
          </div>
        </>
      )}
      {!isSignedIn && (
        <p className="text-center text-2xl text-white">
          <Link href="/sign-in">Sign In</Link>
        </p>
      )}
    </div>
  );
};
