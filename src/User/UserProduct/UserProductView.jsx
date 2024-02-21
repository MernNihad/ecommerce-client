import React from "react";
import { Link } from "react-router-dom";

function UserProductView() {
  return (
    <div className="flex">
      <div className="w-[400px]">
        <img
          className="w-full h-full"
          src={"https://m.media-amazon.com/images/I/710CU6ANgmL._SL1500_.jpg"}
          alt=""
        />
      </div>
      <div className=" flex-1 flex-col flex mt-20 ">
        <h1 className="text-3xl pb-4">
          HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First
          Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP
          Primary Camera | Without Charger
        </h1>
        <p className="text-2xl">RS.40000</p>
        <Link to={'/order-page'}>
          <button
            type="button"
            className=" w-fit ms-4 mt-7 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Order now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserProductView;
