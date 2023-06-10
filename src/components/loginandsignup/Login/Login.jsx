import { Button, Typography } from '@mui/material';
import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { SIGN_UP_URL } from '../../constants/Constants';

const Login = () => {
    return (
        <div className='login-container'>
            <Typography>USER LOGIN</Typography>
            <form action="" className='login-form'>
                <input type="email" name="" id="" placeholder='User Email' />
                <input type="password" name="" id="" placeholder='User password' />
                <Button variant='contained'>Login</Button>
                <Typography variant='p' sx={{marginTop:2}}>If not have account Please <Link to={SIGN_UP_URL} style={{textDecoration:"none"}}>Sign Up Here</Link></Typography>
            </form>
        </div>
    )
}

export default Login;