import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex">
      <div className="w-1/12">
        <Sidebar />
      </div>
      <div className="w-11/12">
        <Outlet />
      </div>

    </div>
  );
};

export default Body;
