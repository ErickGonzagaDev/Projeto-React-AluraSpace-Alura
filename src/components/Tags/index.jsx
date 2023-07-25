// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |        Import fotos.json        |
// ***********************************
import fotos from "../Galeria/fotos.json"

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Tags.module.scss"

const Tags =({tags,filtraFotos,setItens})=>{
    return(
        <div className={styles.tags}>
            <p>
                Filtre por tags:
            </p>
            <ul className={styles.tags__lista}>
                {tags.map((tag)=>
                    <li key={tag} onClick={()=>filtraFotos(tag)}>{tag}</li>
                )}
                <li onClick={()=>setItens(fotos)}>Todas</li>
            </ul>
        </div>
    )
}

export default Tags