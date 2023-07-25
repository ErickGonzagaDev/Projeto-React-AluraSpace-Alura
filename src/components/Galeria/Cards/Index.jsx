// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |        Import imagens           |
// ***********************************

import open from "../open.png";
import favorito from "../favorito.png";

const Cards = ({ styles, foto }) => {
    return (
        <li key={foto.id} className={styles.galeria__card}>
            <img
                className={styles.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
            />
            <p className={styles.galeria__descricao}>{foto.titulo}</p>
            <div>
                <p>{foto.creditos}</p>
                <span>
                    <img src={favorito} alt="Ícone coração de curtir" />
                    <img src={open} alt="Ícone de abrir modal" />
                </span>
            </div>
        </li>
    );
};

export default Cards;
