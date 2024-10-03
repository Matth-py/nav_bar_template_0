// src/components/NavbarStyles.js
import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #1d1d1d;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  svg {
    color: white;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 45px;
    right: 0;
    width: 150px;
    height: 400px;
    background-color: #333;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li`
  margin: 0 1.5rem;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #00d9ff;
    }
  }

  @media (max-width: 768px) {
    margin: 1.5rem 0;

    a {
      font-size: 2rem;
    }
  }
`;
