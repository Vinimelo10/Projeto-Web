import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.divFooter}>
            <div className={styles.divLogo}>
            <img src="../Imagens/Logo.png" className={styles.logoFooter}/>
            </div>
            <div className={styles.redesSociais}>
            <div className={styles.divP}>
                <h2>Siga a EcoTech</h2>
            </div>
            <br /><br />
            <div className={styles.icones}>
                <FaFacebook size={40}/>
                <a href='#' className={styles.a}><p className={styles.pIcons}>Facebook</p></a>
            </div>
            <div className={styles.icones}>
                <FaInstagram size={40}/>
                <a href='#' className={styles.a}><p className={styles.pIcons}>Instagram</p></a>
            </div>
            <div className={styles.icones}>
                <FaGithub size={40}/>
                <a href="https://github.com/RenanNunesz10/EcoTech-Solutions/wiki/Apresenta%C3%A7%C3%A3o" className={styles.a}><p className={styles.pIcons}>Github</p></a>
            </div>
            </div>
            </div>
        </footer>
        </>
    );
}