import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuSuperior from "./MenuSuperior";
import ItemBicicleta from "./ItemBicicleta";
import styles from './ListaBicicletas.module.css';
import axios from 'axios';

function ListaBicicletas() {
    
    const [bicicletas, setBicicletas] = useState([]);

    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    useEffect(() => {
        setCarregando(true);

        axios.get('http://localhost:8080/bicicletas')
            .then(resposta => {
                setBicicletas(resposta.data); 
                setCarregando(false);
            })
            .catch(() => {
                setErro('Não foi possível carregar as bicicletas.');
                setCarregando(false);
            });
    }, []);

    return (
        <div>
            <MenuSuperior />

            <div className={styles.container}>
                <div className={styles.headerRow}>
                    <h2 className={styles.tituloSecao}>Painel de Monitoramento</h2>
                    <Link to="/cadastro">
                        <button className={styles.botaoCadastro}>+ Cadastrar Nova Bicicleta</button>
                    </Link>
                </div>

                {carregando && <p className={styles.mensagemCarregando}>Carregando bicicletas...</p>}
                {erro && <p className={styles.mensagemErro}>{erro}</p>}

                {!carregando && !erro && bicicletas.length === 0 && (
                    <p className={styles.mensagemVazia}>Nenhuma bicicleta cadastrada no momento.</p>
                )}

                <ul className={styles.lista}>
                    {bicicletas.map((bike, index) => (
                        <ItemBicicleta key={bike.id || index} bike={bike} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListaBicicletas