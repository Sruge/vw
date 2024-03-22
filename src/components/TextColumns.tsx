import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const TextColumns: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="row justified">
            <div className="col-12 col-lg-6">
                <p>
                    {t('home_welcome')}
                </p>
                <p className='fst-italic'>
                    {t('home_zitat')}
                </p>
                <p className='fst-italic'>
                    <Link className="text-dark fw-bold text-decoration-none" to="/komponist">{t('home_saeule1')}</Link>
                </p>
                <p className='fst-italic'>
                    <Link className="text-dark fw-bold text-decoration-none" to="/musiker">{t('home_saeule2')}</Link>
                </p>
                <p className='fst-italic'>
                    <Link className="text-dark fw-bold text-decoration-none" to="/lehrer">{t('home_saeule3')}</Link>
                </p>
            </div>
            <div className="col-12 col-lg-6">
                <p className='fst-italic'>
                    {t('home_text')}
                </p>
            </div>
        </div>
    );
};

export default TextColumns;
