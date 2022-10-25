import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

export const ToggleMode = createContext();

const Main = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <ToggleMode.Provider  value={{toggle, setToggle}} >
            <div className={toggle ? `bg-gray-500 text-white` : null}>
            <Navbar/>
            <Outlet/>
            <Footer/>
            </div>
        </ToggleMode.Provider>
    );
};

export default Main;