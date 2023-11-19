import React from 'react';

const TextColumns: React.FC = () => {
    return (
        <div className="row justified">
            <div className="col-12 col-lg-6">
                <p>
                    Willkommen auf der Homepage des Südtiroler Musikers Valentin Gasser.
                </p>
                <p>
                    „Für mich persönlich fußt mein Musikerdasein auf drei tragenden Säulen:
                </p>
                <p>
                    Komponieren
                </p>
                <p>
                    Unterrichten
                </p>
                <p>
                    Musizieren
                </p>
            </div>
            <div className="col-12 col-lg-6">
                <p>
                    Jeder dieser drei Aspekte ist gleichwertig und zusammen ergänzen sie sich zu meinem Bild eines
                    umfassenden Musikers. Ich würde nie auf eine dieser drei Tätigkeiten verzichten wollen, da sie sich
                    gegenseitig befruchten. Als ausführenden Musiker stehe ich auf der Bühne und spiele Werke, die ich
                    komponiert habe und als Lehrender entdecke ich gemeinsam mit meinen Lernenden neue Nuancen und
                    Aspekte, die ich dann als Komponist verwenden kann. Es ließen sich noch viele Beispiele finde, doch
                    zusammengefasst ist es dieser Kreislauf, der mich glücklich macht und es ist mir ein Anliegen diese
                    „Dreieinigkeit“ auch auf meiner Webseite zum Ausdruck zu bringen.“
                </p>
            </div>
        </div>
    );
};

export default TextColumns;
