import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createUser =  (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
    }

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;