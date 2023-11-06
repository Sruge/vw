import React, {ReactNode} from 'react';
import Contact from "./Contact";

interface OtherPageProps {
    imageUrl: string;
    content: ReactNode;
}

const OtherPage: React.FC<OtherPageProps> = ({imageUrl, content}) => {
    const desktopTextStyle: React.CSSProperties = {
        paddingTop: '60vh', // Starts the text at around 2/3 of the screen
        marginTop: '120px',
        overflowY: 'auto', // Allows for scrolling
    };

    // Hide scrollbar - cross-browser
    const hideScrollbarStyle: React.CSSProperties = {
        msOverflowStyle: 'none', // IE and Edge
        scrollbarWidth: 'none', // Firefox
    };

    // Additional style to hide scrollbar for WebKit browsers
    const webkitScrollbarStyle = `
    .desktop-text-column::-webkit-scrollbar {
      display: none;
    }
  `;

    return (
        <div>
            {/* Mobile View */}
            <div className="d-lg-none">
                <img src={imageUrl} alt="Page Content" className="img-fluid"
                     style={{width: '100%', height: '100vh', objectFit: 'cover'}}/>
                <div className="text-column">
                    {content}
                </div>
                <p className='horizontal-line' />
                <div className='px-5 py-3'>
                    <Contact/>
                </div>
            </div>

            {/* Desktop View */}
            <div className="d-none d-lg-flex vh-100">
                <div className="col-lg-6 desktop-text-column" style={{...desktopTextStyle, ...hideScrollbarStyle}}>
                    <style dangerouslySetInnerHTML={{__html: webkitScrollbarStyle}}/>
                    <div className="text-column">
                        {content}
                    </div>
                    <p className='horizontal-line' />
                    <div className='px-5 py-3'>
                        <Contact/>
                    </div>                </div>
                <div className="col-lg-6 h-100">
                    <img src={imageUrl} alt="Page Content" className="img-fluid h-100 w-100"
                         style={{objectFit: 'cover'}}/>
                </div>
            </div>
        </div>
    );
};

export default OtherPage;
