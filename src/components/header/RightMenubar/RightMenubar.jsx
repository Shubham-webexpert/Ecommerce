import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { rightSubmenu } from '../Navbar/NavbarData';
import { Link } from 'react-router-dom';
import { Avatar, Box, Icon } from '@mui/material';

export default function RightMenubar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar style={{ fontSize: 5 }}></Avatar>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    rightSubmenu.map((ele, index) => (
                        <Link to={ele.url} style={{ textDecoration: "none", color: "#000" }} key={index}>
                            <Box style={{ display: "flex", alignItems: 'center', paddingLeft: 15 }}>
                                <Icon>{ele.icon}</Icon>
                                <MenuItem onClick={handleClose}>{ele.title}</MenuItem>
                            </Box>
                        </Link>
                    ))
                }
            </Menu>
        </div>
    );
}