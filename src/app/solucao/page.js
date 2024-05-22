'use client'
import React, { useState, useEffect } from 'react';
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import Poluicao from "../Components/Poluicao";
import styles from "./page.module.css";

export default function Solucao() {
    const [cidades, setCidades] = useState('');

    const handleInputChange = (event) => {
        setCidades(event.target.value);
    };

    return (
        <>
        <header>
            <img src="../Imagens/logo.png" className='logo'/>
            <Menu />
        </header>
        <h1 className={styles.formAPI}>Informe o Nome da Cidade</h1>
        <form onSubmit={e => e.preventDefault()} className={styles.pesquisa}> {}
            <input type="text" 
                   value={cidades}
                   onChange={handleInputChange} />
        </form>
        <Poluicao cidades={cidades} /> {}
        <br/><br/><br/><br/><br/><br/>
        <Footer />
        </>
    );
}
