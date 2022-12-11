import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../common/components/Footer';
import Header from '../common/components/Header/Header';
import Home from './Portfolio';


interface props {
};

const Layout: React.FC<props> = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout