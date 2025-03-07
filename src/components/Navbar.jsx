import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import { useState } from 'react';

export const Navbar = () => {
  const { logout } = useAuth0();
  let classactive = 'text-blue-800';

  const [open, setIsopen] = useState(false)
  const handelopen = () => {
    setIsopen(!open)
  };

  return (
    <div className='flex w-full min-h-screen '>

      <div className='w-0 md:w-[15%] min-h-screen bg-gray-800 fixed transition-all duration-200 ease-in-out md:translate-x-0 -translate-x-full overflow-hidden' >
        <nav className='text-white min-h-screen space-y-4  transition-all duration-200 ease-in-out md:translate-x-0 -translate-x-full overflow-hidden w-0 md:w-full'>

          <div className=' text-white  min-h-screen space-y-4 p-4 w-full  -translate-x-full md:translate-x-0 transition-all'>
            <h1 className="text-xl font-bold">Shop Name</h1>
            <ul>
              <li className="hover:bg-gray-700 p-2 rounded mt-12 ">
                <NavLink className={({ isActive }) => isActive ? classactive : undefined} to="/">DashBoard</NavLink>
              </li>
              <li className="hover:bg-gray-700 p-2 rounded  ">
                <NavLink className={({ isActive }) => isActive ? classactive : undefined} to="customers">Customers</NavLink>
              </li>
              <li className="hover:bg-gray-700 p-2 rounded">
                <NavLink className={({ isActive }) => isActive ? classactive : undefined} to="/add">Add Product</NavLink>
              </li>

              <li className="hover:bg-gray-700 p-2 rounded">
                <NavLink className={({ isActive }) => isActive ? classactive : undefined} to="/find">Inventry</NavLink>
              </li>
             

              <li className="hover:bg-gray-700 p-2 rounded">
                <NavLink className={({ isActive }) => isActive ? classactive : undefined} to="/cash">Cash Parchase</NavLink>
              </li>
            </ul>
            <button className='text-red-600 pt-10 pl-2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          </div>
        </nav>
      </div>
      <div className=' w-full md:ml-[15%] ml-0 min-h-screen'>
        <div className='h-[10%] px-10 py-3 flex md:hidden justify-between bg-gray-600 text-white fixed w-full'><h1 className='text-lg font-semibold'>SHOP NAME </h1>


          <div>
            <button onClick={handelopen}>MENU</button>
          </div>

          {/* DROPDOWN NAVBAR */}
          <div className={open ? ' bg-[#143d63]  text-white fixed z-50  right-0  py-4 mr-4 mt-[40px] rounded-xl grid' : 'hidden'}>
            <ul className='px-5 text-white text-sm'>

              <li className="py-1  ">
                <button onClick={handelopen}><NavLink className={({ isActive }) => isActive ? classactive : undefined} to="/">DashBoard</NavLink> </button>
               </li>
              <li className="py-1  ">
                <button onClick={handelopen}>  <NavLink className={({ isActive }) => isActive ? classactive : undefined} to="customers">Customers</NavLink> </button>
              </li>
              <li className="py-1 ">
                <button onClick={handelopen}> <NavLink className={({ isActive }) => isActive ? classactive : undefined} to="/add">Add Product</NavLink></button>
              </li>
              <li className="py-1 ">
                <button onClick={handelopen}> <NavLink className={({ isActive }) => isActive ? classactive : undefined} to="/find">Inventry</NavLink></button>
              </li>
              
              <li className="py-1 ">
                <button onClick={handelopen}> <NavLink className={({ isActive }) => isActive ? classactive : undefined} to="/cash">Cash Parchase</NavLink></button>
              </li>
            </ul>
            <button className='text-red-600 pt-10 ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          </div>
          {/* END OF DROPDOWN NAVBAR */}


        </div>
        <div className='mt-[9%] md:mt-0'>   <Outlet /></div>

      </div>
    </div>
  )
}
