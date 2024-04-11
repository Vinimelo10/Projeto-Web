import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
        <footer>
            <div className="divFooter">
            <div className="divLogo">
            <img src="../Imagens/Logo.png" className="logoFooter"/>
            </div>
            <div className="redesSociais">
            <div className="divP">
                <h2>Siga a EcoTech</h2>
            </div>
            <br /><br />
            <div className="icones">
                <FaFacebook size={40}/>
                <a href='#'><p className='pIcons'>Facebook</p></a>
            </div>
            <div className="icones">
                <FaInstagram size={40}/>
                <a href='#'><p className='pIcons'>Instagram</p></a>
            </div>
            <div className="icones">
                <FaGithub size={40}/>
                <a href="https://github.com/RenanNunesz10/EcoTech-Solutions/wiki/Apresenta%C3%A7%C3%A3o"><p className='pIcons'>Github</p></a>
            </div>
            </div>
            </div>
        </footer>
        </>
    );
}