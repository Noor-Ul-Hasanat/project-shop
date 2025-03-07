import { createHashRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ProtectedRoute from "./ProtectedRoute"; // Import protected route
import Add from "./Add";

import Find from "./Find";
import { Navbar } from "./Navbar"; // Move this inside ProtectedRoute
import { AvlbleProdts } from "./AvlbleProdts";
import { Dashboard } from "./Dashboard";
import { Customers } from "./Customers";
import { View } from "./View";
import { CashParchase } from "./CashParchase";
import { Invoice } from "./Invoice";
import Signup from "./Signup";

const router = createHashRouter([{
    path: "/signup",
    element: <Signup />, // No Navbar on this page
  },
  {
    element: <ProtectedRoute />, // Protect all routes inside
    children: [
      {
      
        element: <Navbar/>,
        children : [
          { index: true, element : <Dashboard/>},
          {path:'customers', element:<Customers/> },         
          {path:'add', element:<Add/> },
          {path:'find', element:<Find/> },
          {path:'dues', element:<Invoice/> },
          {path:'products', element:<AvlbleProdts/> },
          {path:"/view/:customerId", element:<View/> },
          {path:'cash', element:<CashParchase/> },
          {path:"/view/:customerId", element:<View/> },    
    ]},
    ],
  },
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
