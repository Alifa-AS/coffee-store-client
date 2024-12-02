import React from 'react';

const CoffeeCard = ({coffee}) => {
  
    const {name, quantity, supplier, taste, category, details, photo} = coffee;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                    src={photo}
                    alt="Movie" />
                </figure>
                <div className="flex justify-between w-full pr-4">
                    <div>
                    <h2 className="card-title">Name: {name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier: {supplier}</p>
                        <p>tTaste: {taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn join-item">View</button>
                        <button className="btn join-item">Edit</button>
                        <button className="btn join-item">X</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;