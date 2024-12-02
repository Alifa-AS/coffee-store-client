import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();
    
    return (
        <div className='m-20'>
           <h1 className='text-5xl my-20 text-center'>Hot Hot Cold Coffee: {coffees.length}</h1>

           <div className='grid md:grid-cols-2 gap-4'>
           {
            coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee} >
            </CoffeeCard>)
           }
           </div>
        </div>
    );
};

export default Home;