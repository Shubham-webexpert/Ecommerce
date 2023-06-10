import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { dummyData } from '../../../dummy';

export const getItems = createAsyncThunk('api/fetchData');

// Async thunk to fetch data from the API
export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data;
});

// Create a slice with the initial state and reducers
const apiSlice = createSlice({
  name: 'api',
  initialState: { data: null, loading: false, error: null, cart: [] },
  reducers: {
    ADD_ITEMS: (state, action) => {
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    },
    DELETE_ITEM: (state, action) => {
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    },
    DELETE_ALL_ITEMS: (state, action) => {
      return { ...state, cart: [] };
    },
    CHANGE_QTY: (state, action) => {
      const { id, qty } = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        // Use Immer's produce function to safely modify the state
        state.cart[itemIndex].qty = qty;
      }
    },
    // SET_DISCOUNT:(state,action)=>{
    //     const { id, discount } = action.payload;
    //   const itemIndex = state.cart.findIndex((item) => item.id === id);

    //   if (itemIndex !== -1) {
    //     // Use Immer's produce function to safely modify the state
    //     state.cart[itemIndex].discount = discount;
    //   }
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { ADD_ITEMS, DELETE_ITEM, DELETE_ALL_ITEMS, CHANGE_QTY,SET_DISCOUNT } = apiSlice.actions;
// Export the async thunk and the slice reducer
export default apiSlice.reducer;
