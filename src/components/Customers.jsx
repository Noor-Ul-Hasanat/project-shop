import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { customerActions } from '../store/Mystore';

// style for Mui Model for add New Customer
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #606072',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};

// Refs for name adress and phone during making new cusotmer 
export const Customers = () => {
  const nameRef = useRef();
  const adressRef = useRef();
  const phoneRef = useRef();

// Dispatch and seector for storing customer adree phone and name in store and also to show them there dispatch for storing and selector for pasting here
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customers.customers);
  const totalDebit = useSelector((state) => state.view.totalDebit);


// for Add new customer model open and close
  const [openNewCustomer, setOpenNewCustomer] = useState(false);
  const handleOpencustomerModel = () => setOpenNewCustomer(true);
  const handleClosecustomerModel = () => setOpenNewCustomer(false);

// for Edit customer model open and close
  const [openEditCustomer, setOpenEditCustomer] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleOpenEditcustomerModel = (index) => {
    setEditIndex(index);
    setOpenEditCustomer(true);
  };

  const handleCloseEditcustomerModel = () => {
    setOpenEditCustomer(false);
    setEditIndex(null);
  };

// Handle submit function to add new customer through model
  const handelsubmitNewCustomer = (event) => {
    event.preventDefault();
    const newCustomer = {
      id: `c${Date.now()}`, // unique id
      Name: nameRef.current.value,
      Place: adressRef.current.value,
      Phone: phoneRef.current.value,
      Depit: '0',
      Cradit: '0',
      Date: new Date().toLocaleDateString(),
      Time: new Date().toLocaleTimeString(),
    };

  // Dispatch the new customer to Redux store
   dispatch(customerActions.addCustomer(newCustomer));

  // Clear the form fields (optional)
    nameRef.current.value = '';
    adressRef.current.value = '';
    phoneRef.current.value = '';
    handleClosecustomerModel();
    };

  // handle update function to update existing customer
    const handleUpdateCustomer = (event) => {
    event.preventDefault();
    const updatedCustomer = {
      ...customers[editIndex], // Keep existing data
      Name: nameRef.current.value,
      Place: adressRef.current.value,
      Phone: phoneRef.current.value,
    };

    // Dispatch the updated customer to Redux store
    dispatch(customerActions.updateCustomer(updatedCustomer));
    // Close the modal
    handleCloseEditcustomerModel();
  };

  // Delete customer
   const handelDelete = (id) => {
    dispatch(customerActions.deleteCustomer(id));
  };


  return (
    <>
      <div className="p-6 bg-gray-600 min-h-screen ">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-white">Customers</h1>
          <div className="flex space-x-2">
            {/* Import Button */}
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              <i className="fas fa-file-import mr-2"></i>
              Import
            </button>
            {/* Export Button */}
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              <i className="fas fa-file-export mr-2"></i>
              Export
            </button>
            {/* Add Customer Button */}
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700" onClick={handleOpencustomerModel}>
              + Add Customer
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b bg-slate-700">
                <th className="py-3 px-4 font-semibold text-white">Customer Name</th>
                <th className="py-3 px-4 font-semibold text-white">Address</th>
                <th className="py-3 px-4 font-semibold text-white">PHONE</th>
                <th className="py-3 px-4 font-semibold text-white">DEBIT</th>
                <th className="py-3 px-4 font-semibold text-white">CREDIT</th>
                <th className="py-3 px-4 font-semibold text-white">DATE</th>
                <th className="py-3 px-4 font-semibold text-white">TIME</th>
                <th className="py-3 px-4 font-semibold text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr className="border-b hover:bg-gray-50 odd:bg-gray-200 even:bg-gray-300" key={customer.id}>
                  <td className="py-3 px-4">{customer.Name}</td>
                  <td className="py-3 px-4">{customer.Place}</td>
                  <td className="py-3 px-4">{customer.Phone}</td>
                  <td className="py-3 px-4 bg-red-600 text-white">{totalDebit}</td>
                  <td className="py-3 px-4 bg-green-600 text-white">{customer.Cradit}</td>
                  <td className="py-3 px-4">{customer.Date}</td>
                  <td className="py-3 px-4">{customer.Time}</td>
                  <td className="py-3 px-4 gap-x-[2px] flex">
                    <NavLink to={`/view/${customer.id}`}>
                      <button className="bg-blue-950 text-white px-3 py-1 rounded hover:bg-blue-900">View</button>
                    </NavLink>
                    <button className="bg-blue-950 text-white px-3 py-1 rounded hover:bg-blue-900" onClick={() => handleOpenEditcustomerModel(index)}>
                      <FaEdit />
                    </button>
                    <button className="bg-blue-950 text-white px-3 py-1 rounded hover:bg-blue-900" onClick={() => handelDelete(customer.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Model for add new customer */}
      <Modal open={openNewCustomer} onClose={handleClosecustomerModel} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Customer Form
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <form typeof="submit" className="">
                <div className="grid">
                  <label htmlFor="Name" className="text-base">
                    Name*
                  </label>
                  <input type="text" placeholder="Name" className="bg-gray-100 border border-black rounded-[10px] p-1" ref={nameRef}></input>
                </div>
                <div className="grid mt-4">
                  <label htmlFor="Name" className="text-base">
                    Adress*
                  </label>
                  <input type="text" placeholder="Adress" className="bg-gray-100 border border-black rounded-[10px] p-1" ref={adressRef}></input>
                </div>
                <div className="grid mt-4">
                  <label htmlFor="Name" className="text-base">
                    Phone*
                  </label>
                  <input type="text" placeholder="Phone" className="bg-gray-100 border border-black rounded-[10px] p-1" ref={phoneRef}></input>
                </div>
                <div className="mt-5 flex justify-between">
                  <button onClick={handelsubmitNewCustomer} className="bg-blue-500 rounded-xl text-white px-3 py-1">
                    Submit
                  </button>
                  <button onClick={handleClosecustomerModel} className="bg-red-500 rounded-xl text-white px-3 py-1">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Typography>
        </Box>
      </Modal>

      {/* Model for edit customer */}
      <Modal open={openEditCustomer} onClose={handleCloseEditcustomerModel} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Customer Form
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <form typeof="submit" className="">
                <div className="grid">
                  <label htmlFor="Name" className="text-base">
                    Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-gray-100 border border-black rounded-[10px] p-1"
                    ref={nameRef}
                    defaultValue={editIndex !== null ? customers[editIndex].Name : ''}
                  ></input>
                </div>
                <div className="grid mt-4">
                  <label htmlFor="Name" className="text-base">
                    Adress*
                  </label>
                  <input
                    type="text"
                    placeholder="Adress"
                    className="bg-gray-100 border border-black rounded-[10px] p-1"
                    ref={adressRef}
                    defaultValue={editIndex !== null ? customers[editIndex].Place : ''}
                  ></input>
                </div>
                <div className="grid mt-4">
                  <label htmlFor="Name" className="text-base">
                    Phone*
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="bg-gray-100 border border-black rounded-[10px] p-1"
                    ref={phoneRef}
                    defaultValue={editIndex !== null ? customers[editIndex].Phone : ''}
                  ></input>
                </div>
                <div className="mt-5 flex justify-between">
                  <button onClick={handleUpdateCustomer} className="bg-blue-500 rounded-xl text-white px-3 py-1">
                    Update
                  </button>
                  <button onClick={handleCloseEditcustomerModel} className="bg-red-500 rounded-xl text-white px-3 py-1">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};