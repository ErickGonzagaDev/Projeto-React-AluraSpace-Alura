// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Populares.module.scss";

// ***********************************
// |   Import fotos-populares.json   |
// ***********************************

import fotosPopulares from "./fotos-populares.json";

const Populares = () => {
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotosPopulares.map((fotoPopular)=>{
                    return(
                        <li key={fotoPopular.id}>
                            <img src={fotoPopular.path} alt={fotoPopular.alt} />
                        </li>
                    )
                })}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    );
};

export default Populares;
