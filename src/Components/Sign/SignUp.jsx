import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';


const SignUp = () => {
 
    const {createUser} = useContext(authContext)

    const handleSignUp = e => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('form sign up', email,password)
        
        createUser(email,password)
        .then((result) => {
            console.log('User created successfully:', result.user);
        })
        .catch((error) => {
            console.error('Error creating user:', error.message);
        });

    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col text-center">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6 w-11/12">
                        New coffee is arrived! Grab this soon! So, hurry up!
                    </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SignUp;