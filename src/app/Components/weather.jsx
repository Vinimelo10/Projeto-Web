import styles from "./weather.module.css";

export default function Weather({ weather = {} }) {
    return (
        <article className={styles.weather}>
            <p><strong>ID: {weather.id}</strong></p>
            <p><strong>CIDADE: {weather.city}</strong></p>
            <p><strong>TEMPERATURA: {weather.temperature}</strong></p>
            <p><strong>CONDIÇÃO: {weather.condition}</strong></p>
        </article>
    )
}
