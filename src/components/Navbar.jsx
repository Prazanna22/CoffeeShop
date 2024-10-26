import React, { useState } from 'react';
import shoppingcart from '../assets/other/shopping-cart.png';
import avatar from '../assets/other/avatar.png';
import logo3 from '../assets/other/logo3.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
export const Navbar = () => {

    const {cart }=useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navigate = useNavigate();

    return (
        <>
            <nav className="bg-white shadow-sm sticky top-0 z-10">
                <div className="px-5 sm:px-10 lg:px-20 flex justify-between items-center py-2 ">

                    <div className="hidden sm:flex items-center gap-12">
                        <img src={logo3} alt="Website Logo" className='w-16 md:w-16' onClick={() => { navigate('/') }} />
                        <ul className="flex gap-12">
                            <li><NavLink to="/" className={({ isActive }) =>
                                `relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : ''}`}>Home</NavLink>
                            </li>
                            <li><NavLink to="/menu"
                                className={({ isActive }) =>
                                    `relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : ''}`}>Order</NavLink>
                            </li>
                            <li><NavLink to="/about" className={({ isActive }) =>
                                `relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : ''}`}>About</NavLink>
                            </li>
                        </ul>

                    </div>

                    <div className="hidden sm:flex items-center gap-12">
                        <img src={avatar} alt="User Avatar" className='w-7' />
                        <NavLink to="/cart">
                            <div className="relative px-2 py-1">
                                <img src={shoppingcart} alt="Shopping Cart" className='w-7 relative' />
                                <div className=" rounded-full bg-black absolute py-1 px-2 text-[9px] font-semibold text-white top-0 right-0">{cart.length}</div>
                            </div></NavLink>
                    </div>

                    <div className="sm:hidden flex items-center justify-between w-full py-2 px-3 ">
                        <img src={logo3} alt="Website Logo" className='w-12 md:w-24' onClick={() => { navigate('/'), setIsMenuOpen(false) }} />
                        <div className="flex gap-6">
                            <NavLink to="/cart" ><div className="relative px-2 py-1">
                                <img src={shoppingcart} alt="Shopping Cart" className='w-7 relative' />
                                <div className=" rounded-full bg-black absolute py-1 px-2 text-[9px] font-semibold text-white top-0 right-0">{cart.length}</div>
                            </div></NavLink>
                            <button onClick={toggle} className="focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>


                {isMenuOpen && (
                    <div className="sm:hidden bg-white px-4 py-4 mt-2 shadow-md transition duration-300 ease-in-out">
                        <ul className="flex flex-col gap-4 font-semibold text-sm items-center">
                            <li><NavLink to="/" className="" onClick={() => { setIsMenuOpen(false) }}>Home</NavLink></li>
                            <li><NavLink to="/menu" className="" onClick={() => { setIsMenuOpen(false) }}>Order</NavLink></li>
                            <li><NavLink to="/about" className="" onClick={() => { setIsMenuOpen(false) }}>About</NavLink></li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};
