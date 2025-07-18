import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src="/logo.jpg" alt="Tech Code Solutions Logo" className="logo-img" />
                    <span className="company-name">TECH CODE SOLUTIONS</span>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#about">Sobre nosotros</a></li>
                        <li><a href="#contact">Contactos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;