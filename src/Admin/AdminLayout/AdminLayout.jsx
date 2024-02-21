import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(Boolean(localStorage.getItem("token")));

  useEffect(() => {
    if (!auth) {
      navigate("/login-admin", { replace: true });
    }
  }, [auth, navigate]);


  return (
    <>
      {auth ? (
        <div className="flex items-center h-screen w-full gap-3">
          <div className="dark:bg-[#2e2d2d] border border-dashed border-white  text-gray-500 dark:text-gray-400  w-60 h-[98vh] ms-2 pt-4 rounded-xl">
            <div className="items-center px-2 justify-between rounded-xl flex bg-slate-100 w-[90%] ms-2 mb-5">
              <p className="p-3 ">Logo </p>
              <span>&#127828; &#x1F354;</span>
            </div>
            <div className="">
              <Link to={"/admin/profile"}>
                <div className="w-[90%] hover:bg-white hover:text-black text-white border transition-all px-5 py-2 rounded-md ms-2 mb-2">
                  <p className="text-sm">Profile</p>
                </div>
              </Link>
              <Link to={"/admin/product/"}>
                <div className="w-[90%] hover:bg-white hover:text-black text-white border transition-all px-5 py-2 rounded-md ms-2 mb-2">
                  <p className="text-sm">Product</p>
                </div>
              </Link>
              <Link to={"/admin/"}>
                <div className="w-[90%] hover:bg-white hover:text-black text-white border transition-all px-5 py-2 rounded-md ms-2 mb-2">
                  <p className="text-sm">Home</p>
                </div>
              </Link>
              <Link to={"/admin/"}>
                <div className="w-[90%] hover:bg-white hover:text-black text-white border transition-all px-5 py-2 rounded-md ms-2 mb-2">
                  <p className="text-sm">Home</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="dark:bg-[#2e2d2d]  text-gray-500 dark:text-gray-400 h-[98vh] ms-0 pt-4 rounded-xl w-full me-2 ">
            <Outlet />
          </div>
        </div>
      ) : (
        navigate("/login-admin", { replace: true })
      )}
    </>
  );
}

export default AdminLayout;
