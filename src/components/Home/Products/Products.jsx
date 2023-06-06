import React, { useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from "@mui/material";
import { fetchData } from "./ProductSlice";

const Products = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.api.data);
    const cart = useSelector((state) => state.api.cart);


    useEffect(() => {
        dispatch(fetchData());
    }, []);
    console.log("cart", cart);

    // console.log("Data", data?.products);
    return (
        <div style={{ padding: 35 }}>
            <Grid container spacing={2}>
                {data?.products?.map((item) => {
                    return (
                        <Grid xs={6} sm={4} md={3} lg={2} >
                            <ProductCard item={item}  key={item.id}/>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Products;
