import React from 'react';
import {useRoutes} from "react-router-dom";
import {Admin_Routes, Private_Routes, Public_Routes} from "../Utils/Routes.jsx";

const Pages = () => {
    const token = localStorage.getItem('token');
    return (
        <div className="w-full min-h-[80vh] dark:bg-gray-600">
            {
                useRoutes(token ? (token === 'admin' ? Admin_Routes : Private_Routes) : Public_Routes)
            }
        </div>
    );
};

export default Pages;