import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav className="site-nav" aria-label="Main navigation">
        <ul>
            <li><Link className="nav-link" to="/">HOME</Link></li>
            <li><Link className="nav-link" to="/about">ABOUT</Link></li>
            <li><Link className="nav-link" to="/menu">MENU</Link></li>
            <li><Link className="nav-link" to="/booking">RESERVATIONS</Link></li>
            <li><Link className="nav-link" to="/order">ORDER ONLINE</Link></li>
            <li><Link className="nav-link" to="/login">LOGIN</Link></li>
        </ul>
    </nav>
);

export default Nav;