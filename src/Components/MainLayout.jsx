import React from 'react';
import Navbar from './Layout/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Layout/Footer';

const MainLayout = () => {

    return (
        <div>
            <Navbar />
            <div className="content">
                <Outlet /> {/* Child route (Home, Add Coffee, Update Coffee) */}
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;