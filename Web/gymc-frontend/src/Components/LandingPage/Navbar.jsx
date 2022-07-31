import React, { useState } from 'react'
import logo from '../../images/logo.png';
import { Link } from 'react-scroll';
import './LandingPage.css'

export const Navbar = () => {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main' className='logo'>
                <img src={logo} smooth={true} duration={1000} alt='' />
            </Link>
            <input className='menu-btn' type="checkbox" id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='features' smooth={true} duration={1000}>Features</Link></li>
                <li><Link to='trainers' smooth={true} duration={1000}>Trainers</Link></li>
                <li><Link to='pricing' smooth={true} duration={1000}>Pricing</Link></li>
                <li><Link to='about' smooth={true} duration={1000}>About us</Link></li>
                <li><Link to='contact' smooth={true} duration={1000}>Contact us</Link></li>
                <li><Link to='#' smooth={true} duration={1000}>Login</Link></li>
            </ul>
        </nav>
    )
}
