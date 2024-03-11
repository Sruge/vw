import React from 'react';
import {Link} from "react-router-dom";

const TextColumns: React.FC = () => {
    return (
        <div className="row justified">
            <div className="col-12 col-lg-6">
                <p>
                    Willkommen auf der Homepage des Südtiroler Komponisten, Multiinstrumentalisten und Lehrers Valentin Gasser
                </p>
                <p className='fst-italic'>
                    „Für mich persönlich fußt mein Musikerdasein auf drei tragenden Säulen:
                </p>
                <p className='fst-italic'>
                    <Link className="text-dark fw-bold text-decoration-none" to="/komponist">Komponieren</Link>
                </p>
                <p className='fst-italic'>
                    <Link className="text-dark fw-bold text-decoration-none" to="/musiker">Musizieren</Link>
                </p>
                <p className='fst-italic'>
                    <Link className="text-dark fw-bold text-decoration-none" to="/lehrer">Unterrichten</Link>
                </p>
            </div>
            <div className="col-12 col-lg-6">
                <p className='fst-italic'>
                    Jeder dieser drei Aspekte ist gleichwertig und zusammen ergänzen sie sich zu meinem Bild eines
                    umfassenden Musikers. Ich würde nie auf eine dieser drei Tätigkeiten verzichten wollen, da sie sich
                    gegenseitig befruchten. Als ausführenden Musiker stehe ich auf der Bühne und spiele Werke, die ich
                    komponiert habe und als Lehrender entdecke ich gemeinsam mit meinen Lernenden neue Nuancen und
                    Aspekte, die ich dann als Komponist verwenden kann. Es ließen sich noch viele Beispiele finden, doch
                    zusammengefasst ist es dieser Kreislauf, der mich glücklich macht und es ist mir ein Anliegen diese
                    „Dreieinigkeit“ auch auf meiner Webseite zum Ausdruck zu bringen.“
                </p>
            </div>
        </div>
    );
};

export default TextColumns;
