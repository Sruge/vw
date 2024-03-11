import React from 'react';
import {useTranslation} from "react-i18next";

const PageContentOne: React.FC = () => {
    const { t } = useTranslation();

    return <div className='p-4'>
        <p className='px-4 justified'>
            {t('lehrer_absatz1')}
        </p>
        <p className='px-4 justified'>
            {t('lehrer_absatz2')}

        </p>
        <p className='px-4 justified mb-0'>
            {t('lehrer_absatz3')}
        </p>
        <p className='px-4 justified'>
            {t('lehrer_absatz4')}
        </p>
        <p className='px-4 justified'>
            {t('lehrer_absatz5')}
        </p>
    </div>
};

export default PageContentOne;