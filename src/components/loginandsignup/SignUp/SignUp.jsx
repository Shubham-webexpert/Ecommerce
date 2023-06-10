import { Button, Typography } from "@mui/material";
import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { LOGIN_URL } from "../../constants/Constants";

const SignUp = () => {
  return (
    <div className="signup-container">
      <Typography variant="h4">New User</Typography>
      <form action="" className="signup-form">
        <input type="text" name="firstName" placeholder="First Name"/>
        <input type="text" name="lastName" placeholder="Last Name"/>
        <input type="email" name="email" placeholder="Email"/>
        <input type="password" name="password" placeholder="Password"/>
        <Button variant="contained" sx={{width:"84%",fontWeight:700}}>SIGN UP HERE</Button>
        <Typography variant="">If have already account Please <Link to={LOGIN_URL}style={{textDecoration:"none"}}>Login Here</Link></Typography>
      </form>
    </div>
  );
};

export default SignUp;
