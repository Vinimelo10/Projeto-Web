'use client'
import React, { useState } from 'react';
import Cabecalho from "../Components/Menu";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import Poluicao from "../Components/Poluicao";
import styles from "./page.module.css";

export default function Solucao() {
    const [city, setCity] = useState(''); // Estado para a cidade

    const handleInputChange = (event) => {
        setCity(event.target.value); // Atualiza o estado com o valor do input
    };

    return (
        <>
        <header>
            <img src="../Imagens/logo.png" className='logo'/>
            <Menu />
        </header>
        <form onSubmit={e => e.preventDefault()}> {/* Previne o comportamento padrão de submit */}
            <input type="text" 
                   placeholder="Pesquise a cidade desejada" 
                   className={styles.pesquisa}
                   value={city}
                   onChange={handleInputChange} />
        </form>
        <Poluicao city={city} /> {/* Passa a cidade como prop */}
        <br/><br/><br/>
        <div className="divApi">
            <p>Espaço Reservado para API</p>
        </div>
        <br/><br/><br/>
        <Footer />
        </>
    );
}
