import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loader, setLoader] = useState(true);

console.log(user);

const googleProvider = new GoogleAuthProvider();



//Google Login 
const googleLogIn = () => {
    setLoader(false);
    return signInWithPopup(auth, googleProvider);
};

//Create User with Email and password
const createUser = (email, password) => {
    setLoader(false);
    return createUserWithEmailAndPassword(auth, email, password)
};

//Login User
const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

//Update User
const updateUser = (name, photo) => {
    setLoader(false);
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
}

//User Log Out
const logOut = () => {
    setLoader(false);
    return signOut(auth);
};


useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoader(false);
    })
    return ()=> {
        unsubscribe()
    };
}, [])





    const  authInfo = {user,setUser, googleLogIn, logOut, createUser, loader, loginUser, updateUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;