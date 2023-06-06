import React from "react";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ITEM } from "../Home/Products/ProductSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.api.cart);

  return (
    <div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>srNo.</th>
              <th>Product Image</th>
              <th>Product Title</th>
              <th>Product Price</th>
              <th>product Discount</th>
              <th colSpan={3}>product Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td className="item-image">
                    <img src={item.images[0]} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.discountPercentage}</td>
                  <td>-</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>+</td>
                  <td></td>
                  <td>
                    <DeleteIcon
                      color="error"
                      onClick={() => {
                        dispatch(DELETE_ITEM(item));
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItem;
