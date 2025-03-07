import React from 'react'
import { useDispatch } from 'react-redux'
import { useRef } from 'react';
import { MyActions } from '../store/Mystore';
export default function Add() {
 
  const dispatch = useDispatch();
  const ProductName = useRef();
  const ProductQuantity = useRef();
  const ProductType = useRef();
  const ProductCompany = useRef();
  const ProductPrice = useRef();
  const ProductLocation = useRef();
  const ProductImage = useRef();
 function handalsbmit (event){
  if(!ProductName.current.value||!ProductQuantity.current.value||!ProductType.current.value||!ProductType.current.value||!ProductCompany.current.value||!ProductPrice.current.value||!ProductLocation.current.value){
    return;
  }
   event.preventDefault();
   dispatch(MyActions.Addproduct({
    Name: ProductName.current.value,
    Company: ProductCompany.current.value,
    Quantity: ProductQuantity.current.value,
    Location: ProductLocation.current.value,
    Price: ProductPrice.current.value,
    Type: ProductType.current.value,
    Image: ProductImage.current.files[0] ? URL.createObjectURL(ProductImage.current.files[0]) : '',

  })) ; 
  ProductName.current.value="";
  ProductCompany.current.value="";
  ProductQuantity.current.value="";
  ProductLocation.current.value=""
  ProductPrice.current.value=""
  ProductType.current.value=""
  ProductImage.current.value = null
 }


  return (
    <>
    <div className='w-full pt-6 bg-gray-600 min-h-screen  '>
      <div className='md:pl-6 pl-3 text-xl font-semibold text-white'>
         <h1>Add Inventry</h1></div>
     <div className='justify-center flex items-center md:pt-10 pt-2 px-2'>
     <form className=" w-full md:w-[50%]  bg-gray-800 p-8 rounded-lg shadow-md h-fit">
  <div className="mb-4">
    <input ref={ProductName} type="text" className="w-full px-3 py-2 border rounded-md" id='1'  placeholder="Product Name" required />
  </div>
  <div className="mb-4">
    <input ref={ProductQuantity} type="number" className="w-full px-3 py-2 border rounded-md" id='2'  placeholder="Product Quantity"  required/>
  </div>
  <div className="mb-4">
    <input ref={ProductType} type="text" className="w-full px-3 py-2 border rounded-md" id='3'  placeholder="Vehicle type" required/>
  </div>
  <div className="mb-4">
    <input ref={ProductCompany} type="text" className="w-full px-3 py-2 border rounded-md" id='4'  placeholder="Product Company" required/>
  </div>
  <div className="mb-4">
    <input ref={ProductPrice} type="number" className="w-full px-3 py-2 border rounded-md" id='5'  placeholder="Product Price" required/>
  </div>
  <div className="mb-4">
    <input ref={ProductLocation}  type="text" className="w-full px-3 py-2 border rounded-md" id='6'  placeholder="Location" required/>
  </div>
  <div className="mb-4">
    <input ref={ProductImage}  type="file" className="w-full px-3 py-2 border rounded-md text-white" id='6'  placeholder="image"  readOnly />
  </div>
  <div className='flex justify-center '>
  <button type="submit"  onClick={handalsbmit} className="w-40  bg-green-400 text-black py-2 px-4 rounded-md hover:bg-green-600">Submit</button>
  </div>
</form>
     </div>
  


    </div>
    </>
  )
}
