import React from 'react'

import { NavLink, Outlet } from 'react-router-dom';
export default function Navbar() {
  let classactive = 'text-blue-800';
  return (
    <div className='flex w-full min-h-screen '>
    <div className='w-0 md:w-[15%] min-h-screen bg-gray-800 fixed transition-all duration-200 ease-in-out md:translate-x-0 -translate-x-full overflow-hidden' >
  <nav className='text-white min-h-screen space-y-4 p-4 transition-all duration-200 ease-in-out md:translate-x-0 -translate-x-full overflow-hidden w-0 md:w-full'>

        <div className=' text-white  min-h-screen space-y-4 p-4 w-full  -translate-x-full md:translate-x-0 transition-all'>
          <h1 className="text-xl font-bold">Shop Name</h1>
          <ul>
          <li className="hover:bg-gray-700 p-2 rounded mt-12 ">
          <NavLink className={({isActive})=>isActive? classactive: undefined} to="/">DashBoard</NavLink> {/* In future to add some class for Actice */}
            </li>
          <li className="hover:bg-gray-700 p-2 rounded  ">
          <NavLink className={({isActive})=>isActive? classactive: undefined} to="customers">Customers</NavLink> {/* In future to add some class for Actice */}
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <NavLink className={({isActive})=>isActive? classactive: undefined} to="/add">Add Product</NavLink>
            </li>
           
            <li className="hover:bg-gray-700 p-2 rounded">
              <NavLink className={({isActive})=>isActive? classactive: undefined} to="/find">Inventry</NavLink>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <NavLink className={({isActive})=>isActive? classactive: undefined} to="/dues">Dues</NavLink>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <NavLink className={({isActive})=>isActive? classactive: undefined} to="/cash">Cash Parchase</NavLink>
            </li>
          </ul>
                  
        </div>
      </nav>
      </div>
     <div className=' w-full md:ml-[15%] ml-0'>
      <Outlet/>
     </div>
    </div>
  )
}
