import React, { useState } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Drawer } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { FaBars } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";


function NavDrawer() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data: session, state } = useSession();

  const drawerElementClasses = 'text-xl w-full cursor-pointer duration-300 hover:bg-slate-200 transition-all transform p-4'

  const SignOutButton = () => (
    <div
      onClick={() => {
        signOut();
      }}
      className={drawerElementClasses}
    >
      Sign Out
    </div>
  );

  const MyTripsButton = () => (
    <div className={drawerElementClasses} onClick={() => router.push("my-trips")}>My Trips</div>
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  const BlogButton = () => (
    <div
      className={drawerElementClasses}
      onClick={function() {router.push("../blog");}}

    >
    Blogs </div>
  );
///////////////////////////////////////////////////////////////////////////////////////////////////
  const HomeButton = () => (
    <div
      className={drawerElementClasses}
      onClick={() => router.push("../")}
    >
      Home
    </div>
  );
  return (
    <div className="text-white">
      <ButtonToolbar>
        <Button onClick={() => setOpen(true)}>
          <FaBars className="text-3xl" />
        </Button>
      </ButtonToolbar>
      <Drawer
        backdrop={true}
        placement={"right"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>{session && session.user.name}</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <div className="flex flex-col w-full h-full">
            {session && <MyTripsButton />}
            <hr />
            <HomeButton />
            <hr />
            <BlogButton />
            <hr />
            {session && <SignOutButton />}
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
