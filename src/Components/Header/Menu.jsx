import React from 'react';
import {Admin_Routes, Private_Routes, Public_Routes} from "../../Utils/Routes.jsx";
import {Link} from "react-router-dom";

const Menu = () => {
    const token = localStorage.getItem("token");
    const menuItems = token ? (token === 'admin' ? Admin_Routes : Private_Routes) : Public_Routes
    return (
        <div className="flex gap-3 px-2">
            {
                menuItems.map((item, index) => {
                    return (<Link to={item.path} key={index} >{item.name}</Link>)
                })
            }
        </div>
    );
};

export default Menu;