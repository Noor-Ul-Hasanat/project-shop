import React from 'react'

import { NavLink } from 'react-router-dom';
export default function Navbar() {
  let classactive = 'text-blue-800';
  return (
    <div>
      <nav>
     
        <div className='bg-gray-800 text-white w-64 min-h-screen space-y-4 p-4 '>
          <h1 className="text-xl font-bold">Imtiaz Shopping Mall</h1>
          <ul>
          <li className="hover:bg-gray-700 p-2 rounded mt-12 ">
          <NavLink className={({isActive})=>isActive? classactive: undefined} to="/">Home</NavLink> {/* In future to add some class for Actice */}
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <NavLink className={({isActive})=>isActive? classactive: undefined} to="/add">Add Product</NavLink>
            </li>
           
            <li className="hover:bg-gray-700 p-2 rounded">
              <NavLink className={({isActive})=>isActive? classactive: undefined} to="/find">Find Product</NavLink>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <NavLink className={({isActive})=>isActive? classactive: undefined} to="/dues">Dues</NavLink>
            </li>
          </ul>
          
           
         
        </div>
      </nav>
     
    </div>
  )
}
