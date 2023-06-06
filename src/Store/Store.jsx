import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../components/Home/Products/ProductSlice';


const store=configureStore({
    reducer:{
        api:productReducer,
    }

})

export default store;