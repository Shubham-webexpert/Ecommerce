import { Toolbar } from '@mui/material';
import React from 'react'

const SubNavbar = () => {
  return (
    <div>
        <Toolbar style={{backgroundColor:"#fff"}}>
            <nav>
                <ul style={{listStyle:"none",display:'flex',gap:"40%"}}>
                    <li>Grocery</li>
                    <li>Mobiles</li>
                    <li>Fashions</li>
                    <li>Electronics</li>
                </ul>
            </nav>
        </Toolbar>
    </div>
  )
}

export default SubNavbar;