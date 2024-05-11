import Link  from "next/link";
import styles from "./menu.module.css";

export default function Menu() {
    return (
        <nav className={styles.nav}>
            <div>
            <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/nosso-trabalho">Nosso Trabalho</Link></li>
            <li><Link href="/solucao">Solução</Link></li>
            </ul>
            </div>
        </nav>
    );
}