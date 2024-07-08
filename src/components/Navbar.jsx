import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li className='text-xl font-serif font-bold text-orange-500'><NavLink to="/" className={({isActive})=> isActive? "text-sky-500 font-serif font-bold " : " "}>Home</NavLink></li>
        <li className='text-xl font-serif font-bold text-orange-500'><NavLink to="about" className={({isActive})=> isActive? "text-sky-500 font-serif font-bold " : " "} >About</NavLink></li>
        <li className='text-xl font-serif font-bold text-orange-500'><NavLink to="service" className={({isActive})=> isActive? "text-sky-500 font-serif font-bold  " : " "}>Services</NavLink></li>
        <li className='text-xl font-serif font-bold text-orange-500'><NavLink to="portfolio" className={({isActive})=> isActive? "text-sky-500 font-serif font-bold " : " "}>Portfolio</NavLink></li>
        <li className='text-xl font-serif font-bold text-orange-500'><NavLink to="contact" className={({isActive})=> isActive? "text-sky-500 font-serif font-bold  " : " "}>Contact</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">N@zrul.</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
              
            </div>
        </div>
    );
};

export default Navbar;