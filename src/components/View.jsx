import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaTrash, FaSearch, FaSyncAlt, FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { viewActions } from '../store/Mystore';
// style for Mui Model 
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

export const View = () => {
    const ItemNameRef = useRef();
    const NoOfitemsRef = useRef();
    const AmountRef = useRef();
    const dispatch = useDispatch();
    const items = useSelector((state) => state.view.items);
    const totalDebit = useSelector((state) => state.view.totalDebit);

    const { customerId } = useParams();
    const customers = useSelector(state => state.customers.customers);
    const customer = customers.find(c => c.id === customerId);



    const [openAddBalanceModel, setOpenAddBalanceModel] = useState(false);
    const handleOpenAddBalanceModel = () => setOpenAddBalanceModel(true);
    const handleCloseAddBalanceModel = () => setOpenAddBalanceModel(false);


   

    const formSumbmithandlar = (event) => {
        event.preventDefault();
                                             // Parse input values as numbers
        const price = parseFloat(AmountRef.current.value);
        const numberOfItems = parseFloat(NoOfitemsRef.current.value);

        // Calculate DEBIT (Price * NumberOfItems)
        const debit = price * numberOfItems;

        const newItem = {
            id: `c${Date.now()}`,
            ItemNAME: ItemNameRef.current.value,
            Price: AmountRef.current.value,
            NumberOfItems: NoOfitemsRef.current.value,
            DEBIT: debit,
            CREDIT: '0',
            Date: new Date().toLocaleDateString(),
            Time: new Date().toLocaleTimeString()
        }
        
        dispatch(viewActions.AddBalance(newItem))
        handleCloseAddBalanceModel();
      }
      
    const handalDelete = (id) => {
       dispatch(viewActions.DeleteBalance(id))
    }
    


    // print function 
    const printRef = useRef();
    const handlePrint = useReactToPrint({

        content: () => printRef.current,
        documentTitle: "Invoice",
        onBeforePrint: () => console.log("Printing started..."),
        onAfterPrint: () => console.log("Printing completed!"),
    });

    return (
        <>
            <div className='bg-gray-600 p-5 w-full min-h-screen'>

                <div ref={printRef} className="print-container">
                    <div ref={printRef} className="print-container  bg-white shadow-md rounded-lg p-5 mb-5">
                        <div className="flex justify-between items-start">

                            <div className="text-left">
                                <h2 className="text-xl font-bold">{customer.Name}</h2>
                                <h3 className="text-gray-600 text-lg font-semibold">{customer.Place}</h3>

                            </div>
                            <div>
                                <p className="text-lg font-bold">Phone No: {customer.Phone}<span className="text-gray-600"></span></p>

                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">

                            <div>
                                <span className="text-gray-700 font-medium">Amount you will give: </span>
                                <span className="text-green-500 font-bold">Rs 0</span>
                                <br />
                                <span className="text-gray-700 font-medium">Amount you will get: </span>
                                <span className="text-red-500 font-bold">{totalDebit}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-3 p-4 justify-end bg-white">
                        <button className="bg-gray-300 p-2 rounded-lg text-gray-700"><FaSearch /></button>
                        <button className="bg-gray-300 p-2 rounded-lg text-gray-700"><FaTrash /></button>
                        <button className="bg-gray-300 p-2 rounded-lg text-gray-700"><FaSyncAlt /></button>
                        <button className="bg-gray-300 p-2 rounded-lg text-gray-700" onClick={handlePrint}><FaPrint /></button>
                    </div>
                    {/* <!-- Table --> */}
                    <div className="overflow-x-auto bg-white rounded shadow">
                        <table className="min-w-full text-left">
                            <thead>
                                <tr className="bg-slate-700 text-left">
                                    <th className="py-3 px-4 font-semibold text-white">ITEM NAME</th>
                                    <th className="py-3 px-4 font-semibold text-white">DEBIT</th>
                                    <th className="py-3 px-4 font-semibold text-white">CREDIT</th>
                                    <th className="py-3 px-4 font-semibold text-white">Price</th>
                                    <th className="py-3 px-4 font-semibold text-white">Number Of Items</th>
                                    <th className="py-3 px-4 font-semibold text-white">DATE</th>
                                    <th className="py-3 px-4 font-semibold text-white">TIME</th>
                                    <th className="py-3 px-4 font-semibold text-white">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={item.id || index} className="border-b">
                                        <td className="p-3">{item.ItemNAME}</td>
                                        <td className="p-3 bg-red-500 text-white font-bold">{item.DEBIT}</td>
                                        <td className="p-3 bg-green-500 text-white font-bold">{item.CREDIT}</td>
                                        <td className="p-3">{item.Price}</td>
                                        <td className="p-3 ">{item.NumberOfItems}</td>
                                        <td className="p-3">{item.Date}</td>
                                        <td className="p-3">{item.Time}</td>
                                        <td className="p-3 text-center text-red-600 cursor-pointer"><button onClick={() => { handalDelete(item.id) }}><FaTrash /></button></td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>

                    {/* <!-- Buttons --> */}
                    <div className="mt-5 flex justify-end">

                        <div className="flex space-x-3">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleOpenAddBalanceModel}>Add Balance</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg" >Remove Balance</button>
                        </div>
                    </div>


                </div>
            </div>
            {/* Model for Add balance */}
            <Modal open={openAddBalanceModel} onClose={handleCloseAddBalanceModel} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Customer Form
                    </Typography>
                    <Typography id="modal-modal-description" variant="h6" component="h6">
                        <div className="bg-white p-6 rounded-lg  mt-2 w-96">

                            <form className="space-y-4" typeof='submit' onSubmit={formSumbmithandlar}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Item Name</label>
                                    <input type="text" ref={ItemNameRef} className="w-full p-2 mt-1 border rounded-lg text-lg focus:outline-none focus:ring-2  focus:ring-purple-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Number of Items</label>
                                    <input type="number" ref={NoOfitemsRef} className="w-full p-2 mt-1 border rounded-lg text-lg focus:outline-none focus:ring-2  focus:ring-purple-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                                    <input type="number" ref={AmountRef} className="w-full p-2 mt-1 border text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                </div>
                                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </Typography>
                </Box>
            </Modal>


        </>
    )
}
