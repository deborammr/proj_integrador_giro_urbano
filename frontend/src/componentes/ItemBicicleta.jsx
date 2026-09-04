import React from 'react';
import styles from './ItemBicicleta.module.css';

function ItemBicicleta({ bike }) {
    let statusClass = styles.statusDisponivel;
    if (bike.status === 'Em Uso') statusClass = styles.statusEmUso;
    if (bike.status === 'Manutenção') statusClass = styles.statusManutencao;

    return (
        <li className={styles.card}>
            <div>
                <span className={styles.label}>Patrimônio</span>
                <span className={styles.codigo}>{bike.codigoPatrimonio}</span>
            </div>
            <div>
                <span className={styles.label}>Modelo</span>
                <span className={styles.valor}>{bike.modelo}</span>
            </div>
            <div>
                <span className={styles.label}>Status</span>
                <span className={`${styles.statusBadge} ${statusClass}`}>{bike.status}</span>
            </div>
            <div>
                <span className={styles.label}>Quilometragem</span>
                <span className={styles.valor}>{bike.quilometragem} km</span>
            </div>
            <div>
                <span className={styles.label}>Localização Atual</span>
                <span className={styles.valor}>{bike.localizacaoAtual}</span>
            </div>
        </li>
    );
}

export default ItemBicicleta