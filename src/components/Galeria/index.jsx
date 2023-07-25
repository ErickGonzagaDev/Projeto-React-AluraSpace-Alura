// ***********************************
// |         Import Padrão           |
// ***********************************

import React, { useState } from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Galeria.module.scss";

// ***********************************
// |       Import fotos.json         |
// ***********************************

import fotos from "./fotos.json";

// ***********************************
// |       Import Componentes        |
// ***********************************
import Tags from "../Tags";
import Cards from "./Cards/Index";

const Galeria = () => {
    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map((valor) => valor.tag))];

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag;
        });
        setItens(novasFotos);
    };

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
            <ul className={styles.galeria__cards}>
                {itens.map((foto) => {
                    return <Cards styles={styles} foto={foto} />;
                })}
            </ul>
        </section>
    );
};

export default Galeria;
