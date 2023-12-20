import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import NavOverlay from "./NavOverlay";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar: React.FC = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const location = useLocation();

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const isHomePage = location.pathname === '/' || location.pathname === '/imprint';
    const navLinkClass = isHomePage ? "nav-link text-dark" : "nav-link text-white";
    const togglerIconColor = isHomePage ? "text-dark" : "text-white";

    return (
        <nav className="navbar navbar-expand-lg fixed-top p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <div className="container-fluid align-items-center align-items-lg-start px-2 d-flex justify-content-between">
                {isNavCollapsed && (
                    <>
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="Logo" />
                        </Link>
                        <button className={`navbar-toggler ${togglerIconColor}`} type="button" onClick={handleNavCollapse}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </>
                )}
                {!isNavCollapsed && <NavOverlay handleNavCollapse={handleNavCollapse} />}

                <div className="navbar-nav-desktop">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={navLinkClass} to="/komponist">KOMPONIST</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navLinkClass} to="/musiker">MUSIKER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navLinkClass} to="/lehrer">LEHRER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navLinkClass} to="/biografie">BIOGRAFIE</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
