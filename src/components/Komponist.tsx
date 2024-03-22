import React from 'react';
import {useTranslation} from "react-i18next";

const Komponist: React.FC = () => {
    const {t} = useTranslation();

    const soundCloudEmbedUrl = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/459981777&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true';
    const soundCloudEmbedUrlMindscapes = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1691143524&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true';
    const youtubeEmbedUrl = 'https://www.youtube.com/embed/_dQQPoF72PQ?si=0aVGtQl_xXnoe35w';
    return (
        <div className='p-4'>
            <div className='px-4 justified'>
                <p className='fst-italic'>
                    {t('komponist_absatz1')}
                </p>
                <p>
                    {t('komponist_absatz2')}

                </p>
                <p className='fst-italic'>
                    {t('komponist_absatz3')}

                </p>
                <p>
                    {t('komponist_absatz4')}

                </p>
                <p>
                    {t('komponist_absatz5')}
                </p>
            </div>
            <p className='bold-text px-4 fs-4'>SUITE FOR BIG BAND</p>
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
                    {t('komponist_bigband')}
                </p>
            </div>
            <p className='bold-text px-4 pt-3 fs-4'>ARGE ALP FANFARE</p>
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
            <div className="p-4 justified">
                <p>
                    {t('komponist_arge_alp')}
                </p>
            </div>
            <p className='bold-text px-4 fs-4'>MINDSCAPES</p>
            <div className="embed-responsive embed-responsive-16by9 px-4">
                <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={soundCloudEmbedUrlMindscapes}
                ></iframe>
            </div>
            <div className="p-4 justified">
                <p>
                    {t('komponist_mindscapes_absatz1')}
                </p>
                <p className='fst-italic'>
                    {t('komponist_mindscapes_absatz2')}
                </p>
            </div>
        </div>
    );
};

export default Komponist;