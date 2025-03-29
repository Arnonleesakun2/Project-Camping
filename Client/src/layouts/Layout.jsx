import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <div className="maincontainer mt-20">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
