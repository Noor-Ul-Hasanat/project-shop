import React from 'react'
import { useSelector } from 'react-redux'

export const Invoice = () => {
const ghakname = useSelector(state => state.cash.customerName);
// const ITEMS = useSelector(state => state.cash.list);

   // const Date = new Date().toLocaleDateString();
   // const Time= new Date().toLocaleTimeString();
  return (
 <>
  <div className="max-w-2xl mx-auto bg-white shadow-md p-6 border rounded-md">
      {/* Header */}
      <div className="flex justify-between border-b pb-4">
      <div className="text-left text-sm">
          <p>موبائل فون: 0340-9026378</p>
          <p>موبائل فون: 0342-9653355</p>
        </div>
        <div className='text-right'>
          <p className="font-bold text-xl">مظہر آٹوز</p>
          <p className="text-sm">ہمارا ہے ہر قسم کا ٹریکٹر پارٹس اور آئل دستیاب ہے</p>
          <p className="text-sm">پتہ: مین جی ٹی روڈ جہانگیرہ،  نزد جہانگیرہ بس اسٹاپ</p>
        </div>
        
      </div>
      <div className="flex justify-between border-b pb-4">
      <div className="text-left text-sm">
          <p> Mobile: 0340-9026378</p>
          <p> Mobile: 0340-9026378</p>
        </div>
        <div className='text-right'>
          <p className="font-bold text-xl">MAZHAR AUTOS</p>
          <p className="text-sm">ہمارا ہے ہر قسم کا ٹریکٹر پارٹس اور آئل دستیاب ہے</p>
          <p className="text-sm">پتہ: مین جی ٹی روڈ جہانگیرہ، نزد جہانگیرہ بس اسٹاپ </p>
        </div>
        
      </div>
      
      {/* Customer Details */}
      <div className="mt-4 flex justify-between">
        <div>
        <p className="font-bold text-lg">{ghakname}</p>
        </div>
        <div>
        {/* <p>{Date}</p> */}
        <p>12/3/2025</p>
        {/* <p>{Time}</p> */}
        <p>05:15:42</p>
        </div>
      </div>

      {/* Table */}
      <div className="mt-4">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-2 border">item</th>
              <th className="p-2 border">Number Of Items</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-2 border">askari cement</td>
              <td className="p-2 border">7</td>
              <td className="p-2 border">Rs 1,400.00</td>
              <td className="p-2 border">Rs 9,800.00</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">kraya</td>
              <td className="p-2 border">5</td>
              <td className="p-2 border">Rs 22.00</td>
              <td className="p-2 border">Rs 110.00</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">ring</td>
              <td className="p-2 border">10</td>
              <td className="p-2 border">Rs 280.00</td>
              <td className="p-2 border">Rs 2,800.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-4 border p-2 text-left">
        <p>Discount: <span className="font-bold">Rs 0.00</span></p>
        <p>Total: <span className="font-bold">Rs 12,710.00</span></p>
        <p>Received: <span className="font-bold">Rs 12,710.00</span></p>
        <p>Remaning: <span className="font-bold">Rs 0</span></p>
      </div>
    </div>
  
 </>
  )
}
