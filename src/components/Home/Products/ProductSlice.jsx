import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getItems = createAsyncThunk('api/fetchData',)



// Async thunk to fetch data from the API
export const fetchData = createAsyncThunk('api/fetchData', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data;
});

// Create a slice with the initial state and reducers
const apiSlice = createSlice({
    name: 'api',
    initialState: { data:null, loading: false, error: null, cart:[] },
    reducers: {
        ADD_ITEMS: (state, action) => {
            return { ...state,cart: [...state.cart, { ...action.payload }] }
            // return state.cart?.push(action.payload);
        },
        DELETE_ITEM: (state, action) => {
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
        },
        DELETE_ALL_ITEMS: (state, action) => {
            return { ...state, cart: [] }
        }
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
export const {ADD_ITEMS,DELETE_ITEM,DELETE_ALL_ITEMS}=apiSlice.actions;
// Export the async thunk and the slice reducer
export default apiSlice.reducer;
