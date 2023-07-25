// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Cabecalho.module.scss";

// ***********************************
// |         Import Imagens          |
// ***********************************

import logo from "./logo.png";
import search from "./search.png";

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.cabecalho__container}>
                <input
                    className={styles.cabecalho__input}
                    type="text"
                    placeholder="O que você procura?"
                />
                <img src={search} alt="Ícone de busca" />
            </div>
        </header>
    );
};

export default Cabecalho;
