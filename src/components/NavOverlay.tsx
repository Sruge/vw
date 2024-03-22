import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import {useTranslation} from "react-i18next";

interface NavOverlayProps {
    handleNavCollapse: () => void;
}

const NavOverlay: React.FC<NavOverlayProps> = ({ handleNavCollapse }) => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        handleNavCollapse();
    };

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
                <Link to="/komponist" className="nav-link" onClick={handleNavCollapse}>{t('komponist_nav')}</Link>
                <Link to="/musiker" className="nav-link" onClick={handleNavCollapse}>{t('musiker_nav')}</Link>
                <Link to="/lehrer" className="nav-link" onClick={handleNavCollapse}>{t('lehrer_nav')}</Link>
                <Link to="/biografie" className="nav-link" onClick={handleNavCollapse}>{t('biografie_nav')}</Link>
                <div className="language-switcher">
                    <button className="btn btn-link text-black" onClick={() => changeLanguage('en')}>EN</button>
                    <span className="divider text-black">|</span>
                    <button className="btn btn-link text-black" onClick={() => changeLanguage('de')}>DE</button>
                </div>
            </div>
        </div>
    );
};

export default NavOverlay;

