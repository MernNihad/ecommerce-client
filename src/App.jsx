import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminProduct from "./Admin/AdminProduct/AdminProduct";
import AddProduct from "./Admin/AdminProduct/AdminAddProduct";
import ViewProduct from "./Admin/AdminProduct/AdminViewProduct";
import AdminLayout from "./Admin/AdminLayout/AdminLayout";
import UserLayout from "./User/UserLayout/UserLayout";
import UserProduct from "./User/UserProduct/UserProductView";
import AdminHome from "./User/AdminHome/AdminHome";
import UserProductView from "./User/UserProduct/UserProductView";
import UserOrderPage from "./User/UserOrderPage/UserOrderPage";
import Cart from "./User/Cart/Cart";
import Transactions from "./User/Transactions/Transactions";
import AdminRegistration from "./Admin/AdminRegistration/AdminRegistration";
import AdminLogin from "./Admin/AdminLogin/AdminLogin";
import UserLogin from "./User/UserLogin/UserLogin";
import UserRegistration from "./User/UserRegistration/UserRegistration";
import New from "./New";
import AdminProfile from "./Admin/AdminProfile/AdminProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "product",
          element: <AdminProduct />,
          children: [
            {
              path: "add-product",
              element: <AddProduct />,
            },
            {
              path: "view-product", 
              element: <ViewProduct />,
            },
          ],
        },
        {
          path:"profile",
          element:<AdminProfile/>
        }
         
      ],
    },
    {
      path:'/',
      element:<UserLayout/>,
      children:[
        {
          path:"home",
          element:<AdminHome/>
        },
        {
          path:"view-product/:id",
          element:<UserProductView/>
        },
        {
          path:"order-page",
          element:<UserOrderPage/>
        },
        {
          path:"cart-page",
          element:<Cart/>
        },
        {
          path:"transactions",
          element:<Transactions/>
        },
      ]
    },
    {
      path:"register-admin",
      element:<AdminRegistration/>
    },
    {
      path:'login-admin',
      element:<AdminLogin/>
    },
    {
      path:'login-user',
      element:<UserLogin/>
    },
    {
      path:'register-user',
      element:<UserRegistration/>
    },
    {
      path:'new',
      element:<New/>
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
