import React from 'react';

const Nav = () => (
    <nav className="site-nav" aria-label="Main navigation">
        <ul>
            <li><a className="nav-link" href="/home">HOME</a></li>
            <li><a className="nav-link" href="/about">ABOUT</a></li>
            <li><a className="nav-link" href="/menu">MENU</a></li>
            <li><a className="nav-link" href="/reservations">RESERVATIONS</a></li>
            <li><a className="nav-link" href="/order">ORDER ONLINE</a></li>
            <li><a className="nav-link" href="/login">LOGIN</a></li>
        </ul>
    </nav>
);

export default Nav;