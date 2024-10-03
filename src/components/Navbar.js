// src/components/Navbar.js
import React, { useState } from 'react';
import { NavContainer, Logo, Hamburger, NavMenu, NavItem } from './NavbarStyles';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <Logo>MyBrand</Logo>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <NavItem><a href="#">Home</a></NavItem>
        <NavItem><a href="#">About</a></NavItem>
        <NavItem><a href="#">Services</a></NavItem>
        <NavItem><a href="#">Contact</a></NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
