import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MyActions } from '../store/Mystore';
import { FaTrash, FaEdit } from 'react-icons/fa';

export default function AvlbleProdts() {
  const products = useSelector((state) => state.Available.products);
  const filteredProducts = useSelector((state) => state.Available.filteredProducts);
  const dispatch = useDispatch();
  const [editingIndex, setEditingIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    Name: '',
    Quantity: '',
    Type: '',
    Company: '',
    Price: '',
    Location: '',
    Image: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleEditClick = (index) => {
    setEditingIndex(index);
    const product = products[index];
    setFormValues({
      Name: product.Name || '',
      Quantity: product.Quantity || '',
      Type: product.Type || '',
      Company: product.Company || '',
      Price: product.Price || '',
      Location: product.Location || '',
      Image: product.Image || '',
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(MyActions.UpdateDetails({ index: editingIndex, updatedProduct: formValues }));
    setEditingIndex(null);
  };

  const handleRemove = (index) => {
    dispatch(MyActions.RemoveProduct(index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(MyActions.FilterProducts(query));
  
  };

  return (
    <div className="w-full pt-5 bg-gray-100 min-h-screen">
      {/* Search Input */}
      <div className="max-w-lg mx-auto py-5">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search products by name..."
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      
      {/* Products */}
      <div className="flex flex-wrap gap-3 justify-center">
        {(searchQuery ? filteredProducts : products).map((product, index) => (
          <div
            key={index}
            className="w-full md:w-[48%] lg:w-[45%] bg-gray-900 shadow-2xl rounded-lg overflow-hidden"
          >
            <div className="flex items-center p-4 border-b border-gray-200">
              <div className="w-20 h-20 flex-shrink-0 border border-gray-300 rounded-md overflow-hidden">
                <img
                  src={product.Image || 'https://via.placeholder.com/100'}
                  alt={product.Name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-white">Name: {product.Name}</p>
                <p className="text-white">Quantity: {product.Quantity}</p>
                <p className="text-white">Company: {product.Company}</p>
               
              </div>
              <div className='flex-1'>
              <p className="text-white">Rs: {product.Price}/.</p>
                <p className="text-white">Location: {product.Location}</p>
                <p className="text-white">Type: {product.Type}</p>
              </div>
              <div>
                <button className="text-blue-500 hover:text-blue-700 m-2 mb-14" onClick={() => handleEditClick(index)}>
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700 m-2" onClick={() => handleRemove(index)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editingIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-2xl p-6 rounded-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-red-600 text-center">Edit Product</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              {['Name', 'Quantity', 'Type', 'Company', 'Price', 'Location', 'Image'].map((field) => (
                <input
                  key={field}
                  type={field === 'Quantity' || field === 'Price' ? 'number' : 'text'}
                  name={field}
                  value={formValues[field]}
                  onChange={handleChange}
                  placeholder={`Update ${field}`}
                  className="block w-full p-2 border rounded"
                />
              ))}
              <div className="flex justify-end space-x-4">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
