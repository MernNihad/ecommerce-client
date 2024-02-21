import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-500 flex justify-between mx-10 py-7 mt-2 rounded-lg">
      <div className="ms-3">
        <Link to={"/home"}>
          <h1 className="text-white ms-3">Logo</h1>
        </Link>
      </div>
      <div className="text-white flex gap-5 me-5">
        <p>Orders</p>
        <Link to={'transactions'}>
          <p>Transactions</p>
        </Link>
        <Link to={"/cart-page"}>
          <p>Cart</p>
        </Link>
        <p>Home</p>
        <p>Home</p>
      </div>
    </div>
  );
}

export default Header;
