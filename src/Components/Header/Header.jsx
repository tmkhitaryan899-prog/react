import React from 'react';
import Menu from "./Menu.jsx";
import {useTheme} from "../../Utils/ThemeContext.jsx";
import {FaMoon, FaSun} from "react-icons/fa";

const Header = () => {
    const token = localStorage.getItem("token");
    const {theme, toggleTheme} = useTheme();

    return (
        <div className="w-full h-[10vh] bg-gray-500 flex justify-around items-center dark:bg-gray-800">


            <Menu />


            <button onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>



            {token && <button
                onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload();
                }}
            >
                Log Out
            </button>}
        </div>
    );
};

export default Header;