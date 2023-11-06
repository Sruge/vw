import React from 'react';
import homeImage from '../assets/Bild1.jpg';
import ContactInfo from "./Contact";
import TextColumns from "./TextColumns";
import Concerts from "./Concerts";

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

    return (
        <div className="container-fluid p-0" style={containerStyle}>
            <style dangerouslySetInnerHTML={{__html: webkitScrollbarStyle}}/>
            <img src={homeImage} alt="Home" className="img-fluid w-100" style={{height: '100vh', objectFit: 'cover'}}/>

            <div className='p-5'>
                <TextColumns/>
            </div>
            <p className='horizontal-line'/>

            <div className="row px-5 py-3">
                <div className="col-lg-6">
                    <ContactInfo/>
                </div>
                <div className="col-lg-6">
                    <Concerts/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
