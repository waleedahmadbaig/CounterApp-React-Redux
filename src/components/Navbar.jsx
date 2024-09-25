import React from 'react';
import { useSelector } from 'react-redux';
import "../style/nav.css";

const Navbar = () => {
    const count = useSelector((state) => state.counter.value); 

    return (
        <nav className="navbar">

            <div className="navbar-title">Counter App</div>
             <ul className="lists">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
             </ul>
            <div className="navbar-counter">
                Counter: {count}
            </div>
        </nav>
    );
};

export default Navbar;
