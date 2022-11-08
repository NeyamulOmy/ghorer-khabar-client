import React from 'react';
import NavBar from './layout/Header.js'
import { Outlet } from 'react-router-dom';
import Footer from './layout/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;