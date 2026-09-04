import React from 'react';
import styles from './MenuSuperior.module.css';
import iconeBike from '../assets/logo-bike.png'; 

function MenuSuperior() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.esquerda}>
                <div className={styles.boxAmarelo}>
                    <img src={iconeBike} className={styles.imagemIcone} />
                </div>
                <div>
                    <h1 className={styles.titulo}>Giro Urbano</h1>
                </div>
            </div>
            <h2 className={styles.subtitulo}>Gerenciamento de bikes compartilhadas</h2>
        </div>
    );
}

export default MenuSuperior;