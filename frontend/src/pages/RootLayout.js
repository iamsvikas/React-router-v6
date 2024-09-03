import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import React from "react";

const RootLayout = () => {
  const { state } = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {state === "loading" && <p>loading...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
