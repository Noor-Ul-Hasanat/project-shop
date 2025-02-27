import { configureStore, createSlice } from "@reduxjs/toolkit";


const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [
      { id: '1', Name: 'hasanat', Place: '123 Main St', Phone: '555-1234', Depit: '0', Cradit: '0', Date: '2023-10-01', Time: '12:00 PM' },
      { id: '1', Name: 'Uneeb', Place: '123 Main St', Phone: '555-1234', Depit: '0', Cradit: '0', Date: '2023-10-01', Time: '12:00 PM' },
    ]
  },
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action) => {
      const index = state.customers.findIndex(c => c.id === action.payload.id);
      if(index !== -1) state.customers[index] = action.payload;
    },
    deleteCustomer: (state, action) => {
      state.customers = state.customers.filter(c => c.id !== action.payload);
    }
  }
});

const ViewSlice = createSlice({
  name: 'view',
  initialState: {
    items: [], // Initialize as an empty array
    totalDebit: 0, // Add totalDebit to the initial state
  },
  reducers: {
    AddBalance: (state, action) => {
      state.items.push(action.payload); // Add the new item
      state.totalDebit = state.items.reduce((sum, item) => sum + parseFloat(item.DEBIT), 0); // Recalculate totalDebit
    },
    DeleteBalance: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // Remove the item
      state.totalDebit = state.items.reduce((sum, item) => sum + parseFloat(item.DEBIT), 0); // Recalculate totalDebit
    },
  },
});

const Availabilityslice = createSlice({
    name: 'Available',
    initialState: {
      products: [], // Original products
      filteredProducts: [], // Filtered products based on search
    },
    reducers: {    
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
  

export const store = configureStore({
  reducer:
          {Available:Availabilityslice.reducer,
           customers: customerSlice.reducer,  
           view: ViewSlice.reducer,
       }}) 

export const MyActions = Availabilityslice.actions;
export const customerActions = customerSlice.actions;
export const viewActions= ViewSlice.actions;