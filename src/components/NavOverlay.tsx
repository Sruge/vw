import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

interface NavOverlayProps {
    handleNavCollapse: () => void;
}

const NavOverlay: React.FC<NavOverlayProps> = ({ handleNavCollapse }) => {
    return (
        <div className="custom-overlay">
            <div className="overlay-header">
                <Link to="/" className="navbar-brand" onClick={handleNavCollapse}>
                    <img src={logo} alt="Logo" className="navbar-logo"/>
                </Link>
                <button className="close-button" type="button" onClick={handleNavCollapse}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="nav-links-center">
                <Link to="/komponist" className="nav-link" onClick={handleNavCollapse}>KOMPONIST</Link>
                <Link to="/musiker" className="nav-link" onClick={handleNavCollapse}>MUSIKER</Link>
                <Link to="/lehrer" className="nav-link" onClick={handleNavCollapse}>LEHRER</Link>
                <Link to="/biografie" className="nav-link" onClick={handleNavCollapse}>BIOGRAFIE</Link>
            </div>
        </div>
    );
};

export default NavOverlay;

