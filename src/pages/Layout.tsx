import React from 'react'
import Footer from '../common/components/Footer';
import Header from '../common/components/Header';

interface props {
    children?: React.ReactNode;
};

const Layout: React.FC<props> = ({ children }: props) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout