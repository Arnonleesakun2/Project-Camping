import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";

const LayoutAdmin = () => {
  return (
    <main>
      <Navbar />
      <div className="maincontainer mt-20">
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutAdmin;
