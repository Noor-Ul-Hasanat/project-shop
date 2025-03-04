import { useRef } from 'react';
import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useReactToPrint } from "react-to-print";
export const Invoice = () => {
  const ghakname = useSelector((state) => state.cash.customerName);
  const Calculation = useSelector((state) => state.cash.calculation);
  const purchaseData = useSelector((state) => state.cash.list) || [];
  
const latestPurchase = purchaseData[purchaseData.length - 1] || {};
const items = latestPurchase.items || [];

// Print functionality
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });


  return (
    <>
      <div className="max-w-2xl mx-auto bg-white shadow-md p-6 border rounded-md" ref={contentRef}>
        {/* Header */}
        <div className="flex justify-between border-b pb-4">
          <div className="text-left text-sm">
            <p>موبائل فون: 0340-9026378</p>
            <p>موبائل فون: 0342-9653355</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-xl">مظہر آٹوز</p>
            <p className="text-sm">
              ہمارا ہے ہر قسم کا ٹریکٹر پارٹس اور آئل دستیاب ہے
            </p>
            <p className="text-sm">
              پتہ: مین جی ٹی روڈ جہانگیرہ، نزد جہانگیرہ بس اسٹاپ
            </p>
          </div>
        </div>

        {/* Customer Details */}
        <div className="mt-4 flex justify-between">
          <div>
            <p className="font-bold text-lg">{ghakname}</p>
          </div>
          <div>
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>Time: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-4">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-2 border">Item</th>
                <th className="p-2 border">Number Of Items</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border">
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.quantity}</td>
                  <td className="p-2 border">Rs {item.price}</td>
                  <td className="p-2 border">Rs {item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-4 border p-2 text-left">
         
          <p>
            Total: <span className="font-bold">{Calculation.totalAmount}</span>
          </p>
          <p>
            Received: <span className="font-bold">{Calculation.receivedAmount}</span>
          </p>
          <p>
            Discount: <span className="font-bold">Rs 0.00</span>
          </p>
          <p>
            Remaining: <span className="font-bold">{Calculation.remainingAmount}</span>
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center mt-2' onClick={() => reactToPrintFn()}>
        <button className="p-2 bg-blue-500 text-white rounded" ><FaPrint/></button>
      </div>
    </>
  );
};
