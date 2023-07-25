// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Menu.module.scss";

// ***********************************
// |         Import Imagens          |
// ***********************************

import home from "../../assets/icones/home-ativo.png";
import maisCurtidas from "../../assets/icones/mais-curtidas-inativo.png";
import maisVistas from "../../assets/icones/mais-vistas-inativo.png";
import novas from "../../assets/icones/novas-inativo.png";
import surpreendaMe from "../../assets/icones/surpreenda-me-inativo.png";

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="Home" />
                    <a href="/">Início</a>
                </li>

                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt="Mais curtidas" />
                    <a href="/">Mais curtidas</a>
                </li>

                <li className={styles.menu__item}>
                    <img src={maisVistas} alt=" Mais vistas" />
                    <a href="/">Mais vistas</a>
                </li>

                <li className={styles.menu__item}>
                    <img src={novas} alt="Novas" />
                    <a href="/">Novas</a>
                </li>

                <li className={styles.menu__item}>
                    <img src={surpreendaMe} alt="Surpreenda-me" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
