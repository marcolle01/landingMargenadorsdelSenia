import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import letras from '../../../../public/letras.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='header'>
            <nav className='container my-2 mx-auto mainnav flex flex-wrap items-center justify-between pt-3'>
                <NavLink to={'/'}>
                    <img
                        src={letras}
                        alt='Logo'
                        className='h-10'
                    />
                </NavLink>

                <div className='block'>
                    <button
                        onClick={toggleMenu}
                        className='text-black'
                    >
                        {menuOpen ? (
                            <FaTimes size={35} />
                        ) : (
                            <FaBars size={35} />
                        )}
                    </button>
                </div>
            </nav>
            <div
                className={`menu fixed top-0 right-0 h-full  text-white transition-transform transform ${
                    menuOpen ? 'menu-open' : ''
                }`}
                style={{ backgroundColor: '#415058' }}
            >
                <button
                    onClick={toggleMenu}
                    className='close-button text-white'
                ></button>
                <ul className='flex flex-col p-4'>
                    <li>
                        <NavLink
                            to='/'
                            className='block text-white px-4 py-2'
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className='block text-white px-4 py-2'
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </NavLink>
                    </li>
                    {/* Añade más enlaces según sea necesario */}
                </ul>
            </div>
        </header>
    );
};

export default Header;
