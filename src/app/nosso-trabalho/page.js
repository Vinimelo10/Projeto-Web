'use client'
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import MainNossoTrabalho from "./MainNossoTrabalho";

export default function NossoTrabalho() {
    return (
        <>
        <header>
            <img src="../Imagens/logo.png" className='logo'/>
            <Menu />
        </header>
        <h1 className="h1NT">Nossos Objetivos</h1>
        <MainNossoTrabalho />
        <Footer />
        </>
    );
}