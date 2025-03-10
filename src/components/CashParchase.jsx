import React, { useState,useRef } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaPrint, FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cashActions } from '../store/Mystore';
import { NavLink } from 'react-router-dom';


// style for Mui Model for add New Customer
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxHeight: '100%', // Set a maximum height for the modal
  bgcolor: 'background.paper',
  border: '2px solid #606072',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};
export const CashParchase = () => {
  // Taking ref from input and equal it to state store
 
  const recievedRef = useRef();
  const customerRef = useRef();


  const [customersCash, setCustomersCash] = useState([
    { id: `c${Date.now()}1`, Name: 'hasanat', Place: '123 Main St', Phone: '555-1234', Depit: '0', Cradit: '0', Date: '2023-10-01', Time: '12:00 PM' },
    { id: `c${Date.now()}2`, Name: 'Uneeb', Place: '123 Main St', Phone: '555-1234', Depit: '0', Cradit: '0', Date: '2023-10-01', Time: '12:00 PM' },
  ]);

  const [openNewCustomer, setOpenNewCustomer] = useState(false);
  const handleOpencustomerModel = () => setOpenNewCustomer(true);
  const handleClosecustomerModel = () => setOpenNewCustomer(false);
  // All functionallity of Model
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [received, setReceived] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);


  

  const addItem = () => {
    const newItem = { id: `c${Date.now()}`, name: '', price: 0, quantity: 0};
    setItems([...items, newItem]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    updateTotals(updatedItems);
  };

  const updateItem = (index, field, value) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
    updateTotals(updatedItems);
  };

  const updateTotals = (items) => {
    const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
    const totalAmount = items.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0);
   
    setTotalItems(totalItems);
    setTotalAmount(totalAmount);
  
  };



  const dispatch = useDispatch();

  // Handel submit function
  const submitbutton = () => {
  const GrandTotal = totalAmount - received;
  setGrandTotal(GrandTotal);
  const customerName = customerRef.current.value
    const purchaseData = {
         id: `p${Date.now()}`,
         Name: customerName,
         items:items,            // ✅ Send the items array
      
    };

    const calculation = {
      totalAmount: totalAmount ,
      receivedAmount: received,
      remainingAmount: GrandTotal
    }

  
    dispatch(cashActions.Addlist(purchaseData));
    dispatch(cashActions.AddCustomerName(customerName)) // ✅ Store in Redux
    dispatch(cashActions.AddCalculator(calculation)) // ✅ Store in Redux
    

  }

  

  
  return (
    <>

      <div className="p-6 bg-gray-600 min-h-screen ">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-white">Cash Parchase</h1>

          <div className="flex space-x-2">
            {/* Add Customer Button */}
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700" onClick={handleOpencustomerModel}>
              + New Customer
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full text-left">
            <thead className='bg-slate-700'>
              <tr className="border-b ">
                <th className="py-3 px-4 font-semibold text-white">Customer Name</th>
                <th className="py-3 px-4 font-semibold text-white">Address</th>
                <th className="py-3 px-4 font-semibold text-white">PHONE</th>
                <th className="py-3 px-4 font-semibold text-white">DEBIT</th>
                <th className="py-3 px-4 font-semibold text-white">CREDIT</th>
                <th className="py-3 px-4 font-semibold text-white">DATE</th>
                <th className="py-3 px-4 font-semibold text-white">TIME</th>
              </tr>
            </thead>
            <tbody>
              {customersCash.map((customer, index) => (
                <tr className="border-b hover:bg-gray-50 odd:bg-gray-200 even:bg-gray-300" key={customer.id || index}>
                  <td className="py-3 px-4">{customer.Name}</td>
                  <td className="py-3 px-4">{customer.Place}</td>
                  <td className="py-3 px-4">{customer.Phone}</td>
                  <td className="py-3 px-4">{customer.Cradit}</td>
                  <td className="py-3 px-4">{customer.Depit}</td>
                  <td className="py-3 px-4">{customer.Date}</td>
                  <td className="py-3 px-4">{customer.Time}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
      <div className="print-container">

        <Modal open={openNewCustomer} onClose={handleClosecustomerModel} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>

            <Typography id="modal-modal-description" sx={{ mt: 2 }} component="div">

              <div className="">
                <h1 className="text-xl font-bold mb-4">Cash Purchase</h1>

                <button
                  onClick={addItem}
                  className="p-2 bg-blue-500 text-white rounded mb-2 flex justify-self-start md:justify-self-end">
                  + Add item
                </button>
                <div className='pl-2'>

                  <div className='md:flex grid gap-x-2'>
                    <label className='font-semibold text-xl'>Customer Name: </label>
                    <input ref={customerRef} type='text' placeholder='Customer Name' className='p-2 border border-gray-300 rounded mb-3 md:w-[40%] w-[90%]' required/>

                  </div>
                  <div className="space-y-4 overflow-auto">
                    {items.map((item, index) => (
                      <div key={index} className="flex space-x-4 items-center">
                        <input
                          type="text"
                          placeholder="Item Name"
                          onChange={(e) => updateItem(index, 'name', e.target.value)}
                          className="p-2 border border-gray-300 rounded"
                          required
                        />
                        <input
                        
                          type="number"
                          placeholder="Item Price"
                          required
                          onChange={(e) => updateItem(index, 'price', parseFloat(e.target.value))}
                          className="p-2  border border-gray-300 rounded"
                        />
                        <input
                      
                          type="number"
                          placeholder="Number of Items "
                          required
                          onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value))}
                          className="p-2 border border-gray-300 rounded"
                        />
                        <input
                     
                          type="number"
                          placeholder="Total "
                          required
                          className="p-2 border border-gray-300 rounded"
                          value={item.price * item.quantity || 0}
                        />
                        <button
                          onClick={addItem}
                          className="p-2 bg-green-500 text-white rounded "
                        >
                          <FaPlus />
                        </button>
                        <button
                          onClick={() => removeItem(index)}
                          className="p-2 bg-red-500 text-white rounded"
                        >
                          <FaMinus />
                        </button>

                      </div>
                    ))}

                  </div>
                  <div className="mt-4 space-y-2">
                    <div>Total Items: {totalItems}</div>
                    <div>Total Amount: {totalAmount}</div>

                    <div>
                      Received:
                      <input
                        ref={recievedRef}
                        type="number"

                        onChange={(e) => setReceived(parseFloat(e.target.value))}
                        className="p-2 border border-gray-300 rounded ml-2"
                      />
                    </div>
                    <div className='pt-2'>
                      <h1 className='text-red-500 font-semibold text-base' >Remaning Amount: {grandTotal}</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-4 flex space-x-4">
                    <button className="p-2 bg-green-500 text-white rounded" onClick={submitbutton}>Submit</button>
                    <button className="p-2 bg-gray-500 text-white rounded">Cancel</button>
                    <NavLink to='/dues' ><h1  className="p-2 py-3 bg-blue-500 text-white text-xl rounded"><FaPrint/></h1></NavLink>
                  </div>
                </div>
              </div>

            </Typography>
          </Box>
        </Modal>


      </div>


    </>
  )
}
