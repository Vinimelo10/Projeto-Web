'use client'
import { Link } from "react-router-dom";

export default function Cabecalho() {
    return (
        <>
        <nav>
            <div>
                <img src="../Imagens/Logo.png" className="logo"/>
            </div>
            <div>
            <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/nosso-trabalho">Nosso Trabalho</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            </ul>
            </div>
        </nav>
        </>
    );
}