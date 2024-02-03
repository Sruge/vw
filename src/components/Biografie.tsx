import React from 'react';
import {useTranslation} from "react-i18next";

const Biografie: React.FC = () => {
    const { t } = useTranslation();
    return <div className='p-4 justified'>
        <div className='px-4'>
            {t('biografie')}
        </div>
    </div>
};

export default Biografie;