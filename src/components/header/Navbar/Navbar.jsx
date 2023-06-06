import React from 'react'
import { Box, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import RightMenubar from '../RightMenubar/RightMenubar';
import CartIcon from '../../Cart/CartIcon';
import { CART_URL } from '../../constants/Constants';
const Navbar = () => {
    return (
        <div className='header-container'>
            <Toolbar style={{ backgroundColor: '#000', display: 'flex', justifyContent: 'space-evenly !important' }}>
                <Box className="header-logo">
                    <Link to="/">
                        <Typography variant='h5'>shopEasy</Typography>
                    </Link>
                </Box>
                <Box className="searchbar-container">
                    <input type="text" name="" id="" className='search-input' placeholder='Search for products,brands and more' />
                    <SearchIcon fontSize="small" className='search-logo' />
                </Box>
                <Box>
                    <RightMenubar />
                </Box>
                <Box
                // style={{ position: "relative", left: "15%" }}
                >
                    <Link to={CART_URL}>
                        <CartIcon />
                    </Link>
                </Box>
            </Toolbar>
        </div>
    )
}

export default Navbar;