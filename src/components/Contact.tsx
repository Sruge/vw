import React from 'react';
import {useTranslation} from "react-i18next";

const ContactInfo: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <p className='fw-bold fs-3'>{t('kontakt_text')}</p>
            <p className='fw-bold'>info@valentingasser.com</p>
            <p className='fw-bold'>+39 320 2771784</p>
        </div>
    );
};

export default ContactInfo;
