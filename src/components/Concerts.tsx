import React from 'react';

const Concerts: React.FC = () => {
    return (
        <div className='d-flex align-items-end justify-content-between'>
            <div>
                <p className='fw-bold fs-3'>KONZERTE</p>
                <p className='fw-bold'>30.09.2023 - Astra (Brixen/Italy)</p>
                <p className='fw-bold'>30.09.2023 - Astra (Brixen/Italy)</p>
            </div>
            <div>
                <p className='small-text m-0'>IMPRINT & PRIVACY</p>
                <p className='small-text pb-3 m-0'>VALENTIN GASSER</p>
            </div>
        </div>
    );
};

export default Concerts;
