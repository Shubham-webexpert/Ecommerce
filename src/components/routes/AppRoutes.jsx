import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Cart from '../Cart/Cart'
import { CART_URL, HOME_URL } from '../constants/Constants'

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={HOME_URL} Component={Home} />
                    <Route path={CART_URL} Component={Cart}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes