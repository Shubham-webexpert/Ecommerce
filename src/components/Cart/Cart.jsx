import { Box, Button, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { HOME_URL } from '../constants/Constants';
import CartIcon from './CartIcon';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector((state) => state.api.cart);
    const Navigate = useNavigate();
    return (
        <div>
            <Toolbar style={{ backgroundColor: "#000", color: "#fff", display: 'flex', justifyContent: 'space-between' }}>
                <ArrowBackIcon onClick={() => Navigate(HOME_URL)} style={{ cursor: 'pointer' }} />
                <CartIcon />
            </Toolbar>
            {
                cart.length === 0 ? (
                    <Box className="empty-cart">
                        <img src="/empty-cart.png" alt="empty cart" />
                        <Typography variant="h4" sx={{ color: "#000" }}>Your cart is empty</Typography>
                    </Box>
                ) : (<Box className="cart-table">
                    <CartItem />
                </Box>
                )
            }

            <Box className="continue-shopping">
                <Button onClick={() => Navigate(HOME_URL)}><ArrowBackIcon />Continue Shopping</Button>
            </Box>
        </div>
    )
}

export default Cart;