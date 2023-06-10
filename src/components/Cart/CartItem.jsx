import React, { useEffect, useState } from "react";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ALL_ITEMS, DELETE_ITEM, CHANGE_QTY, SET_DISCOUNT } from "../Home/Products/ProductSlice";
import { Button } from "@mui/material";

const CartItem = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.api.cart);


  useEffect(() => {
    setTotalPrice(cart.reduce((total, curEle) => total + curEle.price * curEle.qty, 0));
    setDiscountedPrice(totalPrice - (totalPrice * (discount / 100)))
  }, [cart, discount, totalPrice])

  console.log("totalPrice", discount);
  console.log("discountedPrice", discountedPrice);
  console.log("discount", discount);

  return (
    <div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Image</th>
              <th>Product Title</th>
              <th>Product Price</th>
              <th>product Discount(%)</th>
              <th colSpan={3}>product Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="item-image">
                    <img src={item.images[0]} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.discountPercentage}</td>
                  <td>
                    <Button
                      style={{ fontSize: 25 }}
                      onClick={() => {
                        setDiscount(item.discountPercentage);
                        dispatch(CHANGE_QTY({ id: item.id, qty: item.qty - 1 }));
                        // dispatch(SET_DISCOUNT({id:item.id,discount:discountedPrice}))
                      }}
                    >
                      -
                    </Button>
                  </td>
                  <td className="qty-input">
                    <input
                      type="text"
                      onChange={(e) => {
                        setDiscount(item.discountPercentage);
                        dispatch(CHANGE_QTY({ id: item.id, qty: Number(e.target.value) }));
                        // dispatch(SET_DISCOUNT({id:item.id,discount:discountedPrice}))
                      }}
                      value={item.qty}
                    />
                  </td>
                  <td>
                    <Button
                      style={{ fontSize: 25 }}
                      onClick={() => {
                        setDiscount(item.discountPercentage);
                        dispatch(CHANGE_QTY({ id: item.id, qty: item.qty + 1 }));
                        // dispatch(SET_DISCOUNT({id:item.id,discount:discountedPrice}))
                      }}
                    >
                      +
                    </Button>
                  </td>
                  <td>
                    {discountedPrice.toFixed(2)}
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        dispatch(DELETE_ITEM(item.id));
                      }}
                    >
                      <DeleteIcon color="error" />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* remove all button */}
        <div className="remove-all-btn">
          <Button
            onClick={() => dispatch(DELETE_ALL_ITEMS())}
            variant="contained"
            color="error"
          >
            Remove All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
