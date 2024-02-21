import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
