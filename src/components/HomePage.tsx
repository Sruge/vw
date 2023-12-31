import React from 'react';
import homeImage from '../assets/Bild1.jpg';
import homeImageMob from '../assets/Bild1mobile.jpg';
import ContactInfo from "./Contact";
import TextColumns from "./TextColumns";
import {Link} from "react-router-dom";

const HomePage: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        overflowY: 'scroll', // Allows for scrolling
        msOverflowStyle: 'none', // IE and Edge
        scrollbarWidth: 'none', // Firefox
        height: '100vh', // Full viewport height
        overflowX: 'hidden', // Prevent horizontal scrolling
        maxWidth: '100vw', // Max width set to 100% of the viewport width
    };

    // Style to hide scrollbars for WebKit browsers (Chrome, Safari, Opera)
    const webkitScrollbarStyle = `
    .container-fluid::-webkit-scrollbar {
      display: none;
    }
  `;

    const imageContainer: React.CSSProperties = {
        position: 'relative', // Relative position for the container
    };

    return (
        <div className="container-fluid p-0" style={containerStyle}>
            <style dangerouslySetInnerHTML={{__html: webkitScrollbarStyle}}/>
            <div style={imageContainer}>
                <picture>
                    <source media="(min-width: 768px)" srcSet={homeImage}/>
                    <img src={homeImageMob} alt="Home" className="img-fluid w-100"
                         style={{height: '100vh', objectFit: 'cover'}}/>
                </picture>
            </div>

            <div className='p-5'>
                <TextColumns/>
            </div>
            <p className='horizontal-line'/>

            <div className="row px-5 py-3">
                <div className="col-lg-6">
                    <ContactInfo/>
                </div>
                <div className="col-lg-6 text-end mt-2 d-flex flex-column justify-content-end">
                    <Link to="/imprint" className="text-decoration-none">
                        <p className='medium-text m-0 text-dark'>IMPRINT & PRIVACY</p>
                        <p className='medium-text pb-3 m-0 text-dark'>© VALENTIN GASSER</p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
