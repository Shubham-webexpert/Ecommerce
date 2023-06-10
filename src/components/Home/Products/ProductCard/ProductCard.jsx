import { Button, Typography } from "@mui/material";
import React from "react";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEMS, DELETE_ITEM } from "../ProductSlice";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.api.cart)

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img
            src={item.images[0]}
            alt=""
          />
        </div>
        <div className="card-content">
          <Typography variant="h5">{item.title}</Typography>
          <Typography>${item.price}</Typography>
          <Typography>{item.discountPercentage}% off</Typography>
        </div>
        <div className="card-button">
          {cart.some((curEle) => curEle.id === item.id) ? (<Button variant="contained" color="error" onClick={() => dispatch(DELETE_ITEM(item.id))}>Remove from cart</Button>
          ) : (
            <Button variant="contained" color="success" onClick={() => {
              dispatch(ADD_ITEMS(item))
            }}>Add to cart</Button>
          )
          }
          <Button>View details </Button>
        </div>
      </div>
    </div>
  );  
};

export default ProductCard;




