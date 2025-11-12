import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FaAngleDown, FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import './Navbar.css';

const NavbarComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    // State for Desktop Dropdown on Click
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    // Close desktop dropdown if user clicks outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown')) {
                setOpenDesktopDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    const handleMobileDropdown = (menu) => {
        setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
    };

    // Function for Desktop Dropdown on Click
    const handleDesktopDropdown = (e, menu) => {
        e.preventDefault(); // Prevents page jump
        setOpenDesktopDropdown(openDesktopDropdown === menu ? null : menu);
    };

    return (
        <nav className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}>
            <Container className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <a href="/" className="logo-link">
                        <span className="logo-fam">fäm</span> Properties
                    </a>
                </div>

                {/* Wrapper for links and buttons to fix layout */}
                <div className="navbar-main-content">
                    {/* Desktop Navigation Links */}
                    <ul className="desktop-nav-links">
                        <li><a href="#"> Projects</a></li>
                        <li className="dropdown">
                            <a href="#" onClick={(e) => handleDesktopDropdown(e, 'buy')}>Buy <FaAngleDown /></a>
                            <ul className={`dropdown-menu ${openDesktopDropdown === 'buy' ? 'show' : ''}`}>
                                <li><a href="#">Apartments in Dubai</a></li>
                                <li><a href="#">Villas in Dubai</a></li>
                                <li><a href="#">Townhouses in Dubai</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" onClick={(e) => handleDesktopDropdown(e, 'rent')}>Rent <FaAngleDown /></a>
                            <ul className={`dropdown-menu ${openDesktopDropdown === 'rent' ? 'show' : ''}`}>
                                <li><a href="#">Apartments for rent</a></li>
                                <li><a href="#">Villas for rent</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Luxe</a></li>
                        
                        <li><a href="#">Sell</a></li>
                        <li><a href="#">Agents</a></li>
                        <li className="dropdown">
                            <a href="#" onClick={(e) => handleDesktopDropdown(e, 'services')}>Services <FaAngleDown /></a>
                            <ul className={`dropdown-menu ${openDesktopDropdown === 'services' ? 'show' : ''}`}>
                                <li><a href="#">Property Management</a></li>
                                <li><a href="#">Mortgage Services</a></li>
                                <li><a href="#">Holiday Homes</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" onClick={(e) => handleDesktopDropdown(e, 'trends')}>Trends <FaAngleDown /></a>
                            <ul className={`dropdown-menu ${openDesktopDropdown === 'trends' ? 'show' : ''}`}>
                                <li><a href="#">Dubai Real Estate Market</a></li>
                                <li><a href="#">Dubai Price Map</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" onClick={(e) => handleDesktopDropdown(e, 'explore')}>Explore <FaAngleDown /></a>
                            <ul className={`dropdown-menu ${openDesktopDropdown === 'explore' ? 'show' : ''}`}>
                                <li><a href="#">Dubai Areas</a></li>
                                <li><a href="#">Buildings</a></li>
                                <li><a href="#">Schools</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" onClick={(e) => handleDesktopDropdown(e, 'more')}>More <FaAngleDown /></a>
                            <ul className={`dropdown-menu ${openDesktopDropdown === 'more' ? 'show' : ''}`}>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Guides</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Right Side Buttons */}
                    <div className="navbar-right">
                        <button className="valuation-btn">
                            <FaPhoneAlt style={{ marginRight: '8px' }} />
                            Valuation
                        </button>
                        <a href="#" className="signin-link">Sign in</a>
                    </div>
                </div>

                {/* Mobile Menu Toggle Icon */}
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <FaBars />
                </div>
            </Container>

            {/* Mobile Sidebar Menu */}
            <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                 <div className="mobile-sidebar-header">
                     <a href="/" className="logo-link">
                        <span className="logo-fam">fäm</span> Properties
                    </a>
                    <FaTimes className="close-icon" onClick={toggleMobileMenu} />
                </div>
                <ul className="mobile-nav-links">
                    <li><a href="#">New Projects</a></li>
                    <li className="mobile-dropdown">
                        <div onClick={() => handleMobileDropdown('buy')}>
                            Buy <FaAngleDown />
                        </div>
                        <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'buy' ? 'open' : ''}`}>
                            <li><a href="#">Apartments in Dubai</a></li>
                            <li><a href="#">Villas in Dubai</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Luxe</a></li>
                        
                        <li><a href="#">Sell</a></li>
                        <li><a href="#">Agents</a></li>
                    <li className="mobile-dropdown">
                        <div onClick={() => handleMobileDropdown('rent')}>
                            Rent <FaAngleDown />
                        </div>
                        <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'rent' ? 'open' : ''}`}>
                            <li><a href="#">Apartments for rent</a></li>
                            <li><a href="#">Villas for rent</a></li>
                        </ul>
                    </li>
                     <li className="mobile-dropdown">
                        <div onClick={() => handleMobileDropdown('services')}>
                            Services <FaAngleDown />
                        </div>
                        <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'services' ? 'open' : ''}`}>
                            <li><a href="#">Property Management</a></li>
                            <li><a href="#">Mortgage Services</a></li>
                        </ul>
                    </li>
                    <li className="mobile-dropdown">
                        <div onClick={() => handleMobileDropdown('trends')}>
                            Trends <FaAngleDown />
                        </div>
                        <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'trends' ? 'open' : ''}`}>
                             <li><a href="#">Dubai Real Estate Market</a></li>
                             <li><a href="#">Dubai Price Map</a></li>
                        </ul>
                    </li>
                    <li className="mobile-dropdown">
                        <div onClick={() => handleMobileDropdown('explore')}>
                            Explore <FaAngleDown />
                        </div>
                        <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'explore' ? 'open' : ''}`}>
                             <li><a href="#">Dubai Areas</a></li>
                             <li><a href="#">Buildings</a></li>
                        </ul>
                    </li>
                     <li className="mobile-dropdown">
                        <div onClick={() => handleMobileDropdown('more')}>
                            More <FaAngleDown />
                        </div>
                        <ul className={`mobile-dropdown-menu ${openMobileDropdown === 'more' ? 'open' : ''}`}>
                           <li><a href="#">Careers</a></li>
                           <li><a href="#">News</a></li>
                           <li><a href="#">Guides</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarComponent;