import {useState} from 'react';

export default function MainHome() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
        <main>
        <div>
            <img src="../Imagens/ImagemHome.jpg" className="imagemHome"/>
        </div>
        <div>
            <h1 className="nossaEmpresa">Nossa Empresa</h1>
        </div>
        <div className="divNossaEmpresa">
        <div>
            <p className="paragrafoNossaEmpresa">Nossa empresa está comprometida em garantir um futuro sem produtos químicos tóxicos, promovendo a saúde de pessoas e do planeta. Nosso objetivo é identificar e substituir produtos químicos nocivos por alternativas mais seguras em diferentes setores, como tecnologia, indústria, agricultura e consumo.</p>
        </div>
        <div>
            <p className="paragrafoNossaEmpresa">A EcoTech Solutions utiliza uma ferramenta chamada GreenScreen for Safer Chemicals, para avaliar e comparar a segurança de diferentes substâncias químicas. Isso nos permite escolher materiais e processos de produção que minimizem a exposição a produtos químicos perigosos.</p>
        </div>
        </div>
        <br /><br /><br /><br />
        <div className="divApi">
            <p>Espaço Reservado para API</p>
        </div>
        <br /><br /><br /><br />
        </main>
        <br /><br /><br /><br />
        <div className="imagemLixo">
            <h1>DE QUE MANEIRA NÓS BRASILEIROS <br />PODEMOS ALCANÇAR NOSSOS OBJETIVOS?</h1>
            <img src="./Imagens/bandeiraBrasil.jpg" className="imagemBrasil" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{width: isHovered ? '250px' : '200px', transition: 'width 0.5s ease'}}/>
        </div>
        <br />
        </>
    );
}