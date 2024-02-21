import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminProduct() {
  return (
    <div className="">
      <div className="flex pb-10">
        <div className="ms-4 mt-2 h-2 w-20 bg-black p-2 animate-bounce rounded-md">
          <Link to={"/admin/product/add-product"}>
            <button
              type="button"
              className="w-full text-[26px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              &#43;
            </button>
          </Link>
        </div>
        <div className="ms-4 mt-2 h-2 w-20 bg-black p-2 animate-bounce rounded-md">
          <Link to={"/admin/product/view-product"}>
            <button
              type="button"
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              &#128065;
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-4 ps-3">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminProduct;
