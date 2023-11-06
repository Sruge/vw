import React from 'react';

const Komponist: React.FC = () => {
    const soundCloudEmbedUrl = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1641791442&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'; // Replace with your SoundCloud embed URL
    const youtubeEmbedUrl = 'https://www.youtube.com/embed/JvpiNeSa1SI?si=_PTT1_pqmgRVJvgK';

    return (
        <div className='p-4'>
            <div className='p-4 justified'>
                <p>
                    „Für mich war es stets selbstverständlich, dass man als ausführender Musiker auch selbst
                    komponiert.“
                </p>
                <p>
                    Die ersten Stücke hat Valentin zusammen mit seinem Musikschullehrer Hans Tutzer bereits im Alter von
                    10 Jahren komponiert. Nach seiner Sturm und Drang-Phase in der Punk/Rock-Band „Petrolium“ (im Alter
                    von 12-15 Jahren) folgte der Einstieg in die Welt des Jazz.
                </p>
                <p>
                    „Während des Saxophonstudiums wurde mir klar, dass das Komponieren für mich untrennbar mit dem
                    Spielen eines Instrumentes verbunden ist. So entschloss ich mich nach 2 Semestern Jazz-Saxophon auch
                    Komposition und Arrangement zu studieren.“
                </p>
                <p>
                    Nach seiner Rückkehr nach Südtirol wurde aus den bis dahin vorherrschenden Jazz-Kompositionen ein
                    sehr breiter, stilistisch schwer fassbarer Genremix(???). So begann er beispielsweise Werke für
                    symphonisches Blasorchester zu schreiben.
                </p>
                <p>
                    "Zitat Georg"
                </p>
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
            <p className='bold-text px-4 pt-3 fs-4'>A YOUTUBE VIDEO</p>
            <div className="video-responsive mx-4">
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
        </div>
    );
};

export default Komponist;