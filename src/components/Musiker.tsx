import React from 'react';

const Musiker: React.FC = () => {
    return (
        <div className='p-4'>
        <div className='px-4 justified'>
            <p>
                Valentin ist seit knapp 20 Jahren als Musiker auf den verschiedensten Bühnen im In- und Ausland
                unterwegs.
            </p>
            <p >
                Ob mit eigenen Gruppen, als Gastsolist, Sideman, Studiomusiker oder Solo.
                Er bespielt sowohl große Konzertsäle als auch kleine Clubs in den unterschiedlichsten Formationen.
                Darüberhinaus ist er sehr gefragt auf Hochzeiten und anderen Veranstaltungen. </p>
            <p >
                Er hat Bühnenerfahrung mit Saxophon, Klavier, Gitarre, Flöte, Klarinette.
            </p>
            <p className='bold-heading mb-4'>
                Eine Auswahl an Projekten an denen Valentin beteiligt ist:
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

            <p className='bold-heading'>Solo:</p>
            <p>Jazz-Klavier
            </p>
            <p>Saxophon</p>

            <p className='bold-heading'>Zusammenarbeit mit:</p>
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
