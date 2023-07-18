"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { trpc } from "../utils/trpc";

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <AuthShowcase />
    </>
  );
}

const AuthShowcase: React.FC = () => {
  // const { isSignedIn } = useUser();

  // const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
  //   undefined,
  //   { enabled: !!isSignedIn },
  // );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
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

      {/* {isSignedIn && (
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
      )} */}
    </div>
  );
};
