import  React, { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartIcon() {
  const [cartLength,setCartLength]=useState();
  const cart=useSelector((state)=>state.api.cart);
  useEffect(()=>{
    setCartLength(cart.reduce((length,curEle)=>length+curEle.qty,0))
  },[cart])
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartLength} color="secondary">
        <ShoppingCartIcon style={{color:'#fff'}}/>
      </StyledBadge>
    </IconButton>
  );
}