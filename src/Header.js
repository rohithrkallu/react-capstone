import React from 'react';
import Nav from './Nav';
import logo from './logo.svg';

const Header = (props) => (
    <header className="site-header">
        <img src={logo} className="header-logo" alt="Logo" />
        <Nav {...props} />
    </header>
);

export default Header;