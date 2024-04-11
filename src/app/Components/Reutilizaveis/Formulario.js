export default function Formulario() {
    return (
        <>
        <form className="divForm">
            <input type="text" placeholder="digite seu nome" />
            <input type="e-mail" placeholder="digite seu e-mail" />
            <input type="text" placeholder="digite seu CPF" />
            <input type="submit" placeholder="Enviar"/>
        </form>
        </>
    );
}