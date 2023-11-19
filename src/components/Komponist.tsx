import React from 'react';

const Komponist: React.FC = () => {
    const soundCloudEmbedUrl = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/459981777&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'; // Replace with your SoundCloud embed URL
    const youtubeEmbedUrl = 'https://www.youtube.com/embed/_dQQPoF72PQ?si=0aVGtQl_xXnoe35w';

    return (
        <div className='p-4'>
            <div className='px-4 justified'>
                <p>
                    „Für mich war es stets selbstverständlich, dass man als ausführender Musiker auch selbst
                    komponiert.“
                </p>
                <p>
                    Seine ersten Stücke hat Valentin zusammen mit seinem damaligen Musikschullehrer Hans Tutzer bereits
                    im Alter von 10 Jahren komponiert. Nach seiner Sturm und Drang-Phase in der Punk/Rock-Band
                    „Petrolium“ (12. bis 15. Lebensjahr) folgte der Einstieg in die Welt des Jazz.
                </p>
                <p>
                    „Während des Saxophonstudiums wurde mir klar, dass das Spielen eines Instrumentes für mich
                    untrennbar mit dem Komponieren verbunden ist. So entschloss ich mich nach 2 Semestern Jazz-Saxophon
                    auch Komposition und Arrangement zu studieren.“
                </p>
                <p>
                    Nach seiner Rückkehr nach Südtirol wurde aus den bis dahin vorherrschenden Jazz-Kompositionen ein
                    noch breiterer und stilistisch undefinierbarer Genremix. In dieser Zeit schrieb er zum Beispiel
                    seine ersten Werke für symphonisches Blasorchester.
                </p>
                <p>
                    "Zitat Georg"
                </p>
                <p>
                    Hier ausgewählte Werke aus dem umfassenden Œuvre des Komponisten Valentin Gasser: </p>
            </div>
            <p className='bold-text px-4 fs-4'>BIG BAND SUITE</p>
            <div className="embed-responsive embed-responsive-16by9 px-4">
                <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={soundCloudEmbedUrl}
                ></iframe>
            </div>
            <div className="p-4 justified">
                <p>
                    Beispielhaft für Valentin's Arbeit als Jazz-Komponist ist diese Suite für Big-Band, die er in seinen
                    Studienjahren in Wien komponierte und arrangierte; dann mit seiner eigenen Big Band geprobt und
                    aufgeführt hat. Diese Aufnahme entstand im Rahmen seines Abschlusskonzertes für Jazz-Komposition im
                    Porgy & Bess in Wien.
                </p>
            </div>
            <p className='bold-text px-4 pt-3 fs-4'>ARGE ALP FANFARE</p>
            <div className="video-responsive mx-4 mb-4">
                <iframe
                    width="560"
                    height="315"
                    src={youtubeEmbedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="p-4 justified">
                <p>Im Frühjahr 2020 beteiligte sich Valentin am „Klingende Alpen“ Kompositionswettbewerb für eine Arge
                    Alp
                    Fanfare.
                    Unter 42 Einsendungen aus 4 Nationen konnte Valentin den mit 5000 € dotierten ersten Preis gewinnen.
                    Es
                    war dies Valentin's erster (und bislang einziger) Wettbewerb.</p>
            </div>
        </div>
    );
};

export default Komponist;