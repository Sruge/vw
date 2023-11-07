import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const location = useLocation(); // Get the current location

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const closeNavbar = () => setIsNavCollapsed(true);
    const isHomePage = location.pathname === '/';

    const navLinkClass = isHomePage ? "nav-link text-dark" : "nav-link text-white";
    return (
        <nav className="navbar navbar-expand-lg fixed-top p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
            <div className="container-fluid align-items-start px-4">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" className="navbar-logo"/>
                </Link>
                <button
                    className={"navbar-toggler" + (isNavCollapsed ? '' : ' collapsed')}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={navLinkClass} to="/komponist" onClick={closeNavbar}>KOMPONIST</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navLinkClass} to="/musiker" onClick={closeNavbar}>MUSIKER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navLinkClass} to="/lehrer" onClick={closeNavbar}>LEHRER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={navLinkClass} to="/biografie" onClick={closeNavbar}>BIOGRAFIE</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;