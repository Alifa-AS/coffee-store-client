import React from 'react';
import Swal from 'sweetalert2'
    
const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);


        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)  //data set
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        });
     
    }


    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row 1*/}
               <div className='md:flex mb-8'>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Coffee Name</span>
                    </div>
                    <input type="text" name="name" placeholder="Coffee Name" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Available Quantity</span>
                    </div>
                    <input type="text" name="quantity" placeholder="Available Quantity" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               </div>
                {/* form row 2*/}
               <div className='md:flex mb-8'>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Supplier</span>
                    </div>
                    <input type="text" name="supplier" placeholder="Supplier" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Taste</span>
                    </div>
                    <input type="text" name="taste" placeholder="Taste" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               </div>
                {/* form row 3*/}
               <div className='md:flex mb-8'>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Category</span>
                    </div>
                    <input type="text" name="category" placeholder="Category" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               <div className='md:w-1/2 ml-4'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Details</span>
                    </div>
                    <input type="text" name="details" placeholder="Details" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               </div>
                {/* photo row 3*/}
               <div className='ml-4 mb-8'>
               <div className='w-full'>
                   <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Photo URL</span>
                    </div>
                    <input type="text" name="photo" placeholder="Photo URL" 
                    className="input input-bordered w-full" />
                    </label>
               </div>
               </div>
               <input type="submit" value="Add Coffee" className='btn btn-block bg-[#D2B48C]' />
            </form>
        </div>
    );
};

export default AddCoffee;