import React from 'react';
import {useTranslation} from "react-i18next";

const Musiker: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className='p-4'>
        <div className='px-4 justified'>
            <p>
                {t('musiker_absatz1')}
            </p>
            <p >
                {t('musiker_absatz2')}
            </p>
            <p >
                {t('musiker_absatz3')}
            </p>
            <p className='bold-heading mb-4'>
                {t('musiker_heading_zusammenarbeit')}
            </p>
            <p>
                Die Seltsamen Senfsamen
            </p>
            <p>ATJ & the Forbidden Fruits (Klavier & Sax)</p>
            <p>Die Schöne und das Blech (Klavier & Sax)</p>
            <p>Wide Angles (Jazz-Sextett in Wien, ausschließlich Valentin's Eigenkompositionen)
            </p>
            <p>Südtiroler Jugendbigband</p>
            <p>Bürgerkapelle Gries</p>

            <p className='bold-heading'>
                {t('musiker_solo')}
            </p>
            <p>Jazz-Klavier
            </p>
            <p>Saxophon</p>

            <p className='bold-heading'>
                {t('musiker_zusammenarbeit')}
            </p>
            <p>Berise</p>
            <p>Wicked & Bonny</p>
            <p>Expulze & Narfos</p>
            <p>Manu Mischkonsum</p>
            <p>Fruity Sessions</p>

            <p className='bold-heading'>DJ's:</p>
            <p>Mr. Wushu</p>
            <p>DJ MAEXX</p>
            <p>Sara Louis</p>
            <p>Nilo</p>
        </div>
        </div>
    );
};

export default Musiker;
