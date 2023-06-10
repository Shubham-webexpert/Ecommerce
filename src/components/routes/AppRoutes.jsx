import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Cart from '../Cart/Cart'
import { CART_URL, HOME_URL, LOGIN_URL, SIGN_UP_URL } from '../constants/Constants'
import Login from '../loginandsignup/Login/Login'
import SignUp from '../loginandsignup/SignUp/SignUp'

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={HOME_URL} Component={Home} />
                    <Route path={CART_URL} Component={Cart} />
                    <Route path={LOGIN_URL} Component={Login} />
                    <Route path={SIGN_UP_URL} Component={SignUp} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes