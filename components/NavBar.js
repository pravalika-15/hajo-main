import React from "react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import NavDrawer from "./NavDrawer";
import { useRouter } from "next/router";
import WriteReviewBtn from "./WriteReviewBtn"

function NavBar() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const WelcomeUser = () => (
    <div className="text-white flex items-center flex-row">
      <p className="pr-3">Welcome {session.user.name}</p>
      <Image
        src={session.user.image}
        width={30}
        height={30}
        alt={session.user.name + "'s Image"}
      />
    </div>
  );

  const SignInButton = () => (
    <button
      onClick={() => {
        signIn();
      }}
      className="rounded-lg p-3 font-bold hover:text-white hover:bg-black border hover:shadow-xl bg-white text-black shadow-md"
    >
      Sign In
    </button>
  );

  return (
    <div className="flex flex-row top-0 w-full z-10 sticky justify-between items-center bg-black px-3">
      <div onClick={() => router.push("../")} className="font-bold text-white text-3xl m-4 ml-8">HaJo</div>

      <div className="flex flex-row space-x-3 justify-items-end">
      {session && <WriteReviewBtn/>}
        {session && <WelcomeUser />}
        <div className="mt-3">{session && <NavDrawer/>}</div>
        {!session && <SignInButton />}
      </div>
    </div>
  );
}

export default NavBar;
