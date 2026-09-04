import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuSuperior from "./MenuSuperior";
import styles from './Cadastro.module.css';
import axios from 'axios';

function Cadastro() {
    const navigate = useNavigate();

    const [codigoPatrimonio, setCodigoPatrimonio] = useState('');
    const [modelo, setModelo] = useState('');
    const [status, setStatus] = useState('');
    const [quilometragem, setQuilometragem] = useState('');
    const [localizacaoAtual, setLocalizacaoAtual] = useState('');

    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    // Conexão com backend
    const cadastrarBicicleta = (evento) => {
        evento.preventDefault();

        const novaBicicleta = {
            codigoPatrimonio,
            modelo,
            status,
            quilometragem: Number(quilometragem),
            localizacaoAtual
        };

        axios.post('http://localhost:8080/bicicletas', novaBicicleta)
            .then(() => {
                setMensagemSucesso('Bicicleta cadastrada com sucesso!');
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            })
            .catch((erro) => {
                console.error('Erro ao cadastrar bicicleta:', erro);

                setMensagemErro('Erro ao cadastrar bicicleta. Verifique os dados.');
                setTimeout(() => {
                    setMensagemErro('');
                }, 3000);
            });
    };

    return (<div className={styles.containerPagina}>
        <MenuSuperior />

        {/* Cadastro */}
        <div className={styles.containerForm}>
            <h2 className={styles.titulo}>Cadastro de Bicicleta</h2>

            <form onSubmit={cadastrarBicicleta}>
                <div className={styles.grupoInput}>
                    <label className={styles.label}>Código de Patrimônio:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="ipt_codigo"
                        value={codigoPatrimonio}
                        onChange={(evento) => setCodigoPatrimonio(evento.target.value)}
                        placeholder="BIKE-042"
                        required
                    />
                </div>

                <div className={styles.grupoInput}>
                    <label className={styles.label}>Modelo:</label>
                    <select
                        className={styles.select}
                        id="ipt_modelo"
                        value={modelo}
                        onChange={(evento) => setModelo(evento.target.value)}
                        required
                    >
                        <option value="">Selecione o modelo</option>
                        <option value="Elétrica">Elétrica</option>
                        <option value="Comum">Comum</option>
                        <option value="Infantil">Infantil</option>
                    </select>
                </div>

                <div className={styles.grupoInput}>
                    <label className={styles.label}>Status:</label>
                    <select
                        className={styles.select}
                        id="ipt_status"
                        value={status}
                        onChange={(evento) => setStatus(evento.target.value)}
                        required
                    >
                        <option value="">Selecione o status</option>
                        <option value="Disponível">Disponível</option>
                        <option value="Em Uso">Em Uso</option>
                        <option value="Manutenção">Manutenção</option>
                    </select>
                </div>

                <div className={styles.grupoInput}>
                    <label className={styles.label}>Quilometragem:</label>
                    <input
                        className={styles.input}
                        type="number"
                        step="0.1"
                        min="0"
                        id="ipt_quilometragem"
                        value={quilometragem}
                        onChange={(evento) => setQuilometragem(evento.target.value === '' ? '' : Number(evento.target.value))}
                        placeholder="0.0"
                        required
                    />
                </div>

                <div className={styles.grupoInput}>
                    <label className={styles.label}>Localização Atual:</label>
                    <select
                        className={styles.select}
                        id="ipt_localizacao"
                        value={localizacaoAtual}
                        onChange={(evento) => setLocalizacaoAtual(evento.target.value)}
                        required
                    >
                        <option value="">Selecione a localização</option>
                        <option value="Rua Haddock Lobo - Jardins">Rua Haddock Lobo - Jardins</option>
                        <option value="Rua Haddock Lobo - Centro">Rua Haddock Lobo - Centro</option>
                        <option value="Rua Augusta - Jardins">Rua Augusta - Jardins</option>
                        <option value="Rua Augusta - Centro">Rua Augusta - Centro</option>
                        <option value="Oficina">Oficina</option>
                    </select>
                </div>

                <button className={styles.botaoSubmit} type="submit">Cadastrar Bicicleta</button>

                <button className={styles.botaoCancelar} type="button" onClick={() => navigate('/')}>Cancelar</button>
            </form>

            {/* Modais de mensagens de sucesso/erro */}
            {mensagemSucesso && (
                <div className={styles.overlaySucesso}>
                    <span className={styles.spanSucesso}>{mensagemSucesso}</span>
                </div>
            )}

            {mensagemErro && (
                <div className={styles.overlayErro}>
                    <span className={styles.spanErro}>{mensagemErro}</span>
                </div>
            )}

        </div>
    </div>);
}

export default Cadastro