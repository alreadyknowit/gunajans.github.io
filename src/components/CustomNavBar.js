import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import '../styles/navbar.css'
function CustomNavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args} expand="md" >
                <NavbarBrand href="/">
                    <img alt='Logo' className='logo' src={logo} ></img>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto justify-content-center" navbar>
                        <NavItem>
                            <Link to="/" className="nav-link">Anasayfa</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="nav-link"> Hakkımızda</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/references" className="nav-link">Referanslar</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/services" className="nav-link">Hizmetler</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="nav-link">İletişim</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavBar;
