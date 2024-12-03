import React from 'react';
import Banner from './Layout/Banner';
import Home from './Layout/Home';
import { useLoaderData } from 'react-router-dom';

const HomeLayout = () => {
    const loadedCoffees = useLoaderData();
    return (
        <div>
            <Banner />
            <Home loadedCoffees={loadedCoffees} />
        </div>
    );
};

export default HomeLayout;