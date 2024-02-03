interface ITranslation {
    biografie: string;
    lehrer: string;
    komponist: string;
}

interface Resources {
    de: {
        translation: ITranslation;
    };
    en: {
        translation: ITranslation;
    };
}

export const resources: Resources = {
    de: {
        translation: {
            biografie: "Der Multiinstrumentalist und Komponist Valentin Gasser erhielt den ersten Saxophonunterricht von seinem Vater und besuchte bis 2010 die Musikschule Bozen bei Hans Tutzer. Von 2010 bis 2018 studierte er an der Konservatorium Wien Privatuniversität (später Universität für Musik und Kunst) zuerst Jazz-Saxophon (bei Prof. Thomas Huber) und anschließend Jazz-Komposition & Arrangement (Prof. Andy Middleton). Neben dem Saxophon spielt er unter anderem auch Klavier, Gitarre, Querflöte, Klarinette, Schlagzeug und Trompete. Seit Sommer 2018 lebt Valentin Gasser wieder in Bozen, unterrichtet (hauptsächlich Saxophon und Klavier), spielt in diversen Ensembles sowie als Solist, komponiert und arrangiert (sowohl Jazz, als auch Klassik und symphonische Blasmusik).",
            lehrer: "Welcome to our application",
            komponist: "Welcome to our application",
        },
    },
    en: {
        translation: {
            biografie: "The multi-instrumentalist and composer Valentin Gasser received his first saxophone lessons from his father and attended the Bozen Music School under Hans Tutzer until 2010. From 2010 to 2018, he studied at the Conservatory Vienna Private University (later University for Music and Performing Arts) first in Jazz Saxophone (with Prof. Thomas Huber) and then in Jazz Composition & Arrangement (Prof. Andy Middleton). In addition to the saxophone, he also plays the piano, guitar, flute, clarinet, drums, and trumpet among others. Since the summer of 2018, Valentin Gasser has been living back in Bozen, teaching (mainly saxophone and piano), playing in various ensembles as well as a soloist, composing, and arranging (including jazz, classical, and symphonic wind music).",
            lehrer: "Welcome to our application",
            komponist: "Welcome to our application",
        },
    },
};