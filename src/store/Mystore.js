import { configureStore, createSlice } from "@reduxjs/toolkit";

const Availabilityslice = createSlice({
    name: 'Available',
    initialState: {
      products: [], // Original products
      filteredProducts: [], // Filtered products based on search
    },
    reducers: {
      Addproduct: (state, action) => {
        state.products.push(action.payload);
        state.filteredProducts = state.products;
      },
      UpdateDetails: (state, action) => {
        const { index, updatedProduct } = action.payload;
        state.products[index] = { ...state.products[index], ...updatedProduct };
        state.filteredProducts = state.products;
      },
      RemoveProduct: (state, action) => {
        state.products.splice(action.payload, 1);
        state.filteredProducts = state.products;
      },
      FilterProducts: (state, action) => {
        const query = action.payload.toLowerCase();
        state.filteredProducts = state.products.filter((product) =>
          product.Name.toLowerCase().includes(query)
        );
      },
    },
  });
  

export const store = configureStore({reducer:
    {Available:Availabilityslice.reducer
   
}}) 

export const MyActions = Availabilityslice.actions;