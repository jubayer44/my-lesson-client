import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  //Google Login
  const googleLogIn = () => {
    setLoader(false);
    return signInWithPopup(auth, googleProvider);
  };

  //GitHub Login
  const gitHubLogIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  //Create User with Email and password
  const createUser = (email, password) => {
    setLoader(false);
    return createUserWithEmailAndPassword(auth, email, password);
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
      photoURL: photo,
    });
  };

  //Reset Password
  const resetPassword = (email) => {
    setLoader(false);
    return sendPasswordResetEmail(auth, email);
  };

  //User Log Out
  const logOut = () => {
    setLoader(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    googleLogIn,
    gitHubLogIn,
    logOut,
    createUser,
    loader,
    loginUser,
    resetPassword,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
