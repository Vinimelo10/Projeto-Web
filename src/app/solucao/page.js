import Cabecalho from "../Components/Menu";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";

export default function Solucao() {
    return (
        <>
        <header>
        <img src="../Imagens/logo.png" className='logo'/>
        <Menu />
        </header>
        <div className="divApi">
            <p>Espaço Reservado para API</p>
        </div>
        <br/><br/><br/>
        <div className="divApi">
            <p>Espaço Reservado para API</p>
        </div>
        <br/><br/><br/>
        <Footer />
        </>
    );
}