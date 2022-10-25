import React, { createContext, useEffect, useState } from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../Firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);

console.log(user);

const googleProvider = new GoogleAuthProvider();



//Google Login 
const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
};

//User Log Out
const logOut = () => {
    return signOut(auth);
};


useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
    })
    return unsubscribe();
}, [])





    const  authInfo = {user,setUser, googleLogIn, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;