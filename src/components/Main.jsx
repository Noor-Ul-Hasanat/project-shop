import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Add from './Add';
import Update from './Update';
import Find from './Find';
import Dues from './Dues';
// import Home from './Home';
import Navbar from './Navbar';
import AvlbleProdts from './AvlbleProdts';
import { Dashboard } from './Dashboard';
import { Customers } from './Customers';
import { View } from './View';
import { CashParchase } from './CashParchase';
const router = createBrowserRouter([

  {
    path: "/",
    element:<Navbar/>,
    children:[
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/add",
        element: <Add />
      },
      {
        path: "/update",
        element:<Update/>
      },
      {
        path: "/find",
        element:<Find/>
      },
      {
        path: "/dues",
        element:<Dues/>
      },
      {
        path: "/products",
        element:<AvlbleProdts/>
      },
      {
        path: "/customers",
        element:<Customers/>
      },
      {
        path: "/view/:customerId",
        element:<View/>
      },
      {
        path: "/cash",
        element:<CashParchase/>
      }


    ]
  }
 




  // {
  //   path: "/",
  //   element:<div className='flex'><Navbar/><Home/></div>
  // },
  // {
  //   path: "/add",
  //   element: <div className='flex'><div> <Navbar/></div><div className='flex-grow flex justify-center items-center'><Add /></div></div>
  // },
  // {
  //   path: "/update",
  //   element:<div className='flex'><Navbar/><Update/></div>
  // },
  // {
  //   path: "/find",
  //   element:<div className='flex' ><div><Navbar/> </div><div className='flex-grow flex justify-center items-center'><Find/></div></div>
  // },
  // {
  //   path: "/dues",
  //   element:<div className='flex'><Navbar/><Dues/></div>
  // },
  // {
  //   path: "/products",
  //   element:<div className='flex'><Navbar/><AvlbleProdts/></div>
  // }
]);

export default function Main() {
  return (
   
      
        <div>   
     <RouterProvider router={router} />
     </div>  
    
      
    
  );
}
