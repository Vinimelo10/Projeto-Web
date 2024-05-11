import CardsTrabalhos from "./CardsTrabalhos";

export default function MainNossoTrabalho() {
    return (
        <main>
            <div className="cards">
            <CardsTrabalhos Serviço="Conscientização" Descrição="O Brasil já confirmou a importância de abordar a poluição do ar e da água, assim como o uso de produtos químicos perigosos. Junto à eles, a EcoTech ajudará com projetos para a baixa de mortes relacionadas ao assunto tratado." Imagem="./Imagens/conscientizacao.png"/>
            <CardsTrabalhos Serviço="Monitoramento e Avaliação" Descrição="Estabelecer e fortalecer sistemas de monitoramento e avaliação da poluição do ar e da água, bem como do uso de produtos químicos perigosos." Imagem="./Imagens/monitoramento.png"/>
            <CardsTrabalhos Serviço="Regulamentação e Fiscalização" Descrição="Implementar e fortalecer as regulamentações relacionadas à poluição do ar e da água, bem como à gestão de produtos químicos perigosos. Isso inclui o desenvolvimento e a aplicação de avaliações para encorajar o cumprimento das normas e regulamentos." Imagem="./Imagens/regulamento.png"/>
            </div>
            <div className="cards">
            <CardsTrabalhos Serviço="Educação" Descrição="Promover a educação e a conscientização sobre os riscos à saúde associados à poluição do ar e da água. Isso inclui a promoção de práticas sustentáveis em setores como agricultura e indústria, além de campanhas de conscientização para o público em geral." Imagem="./Imagens/educacao.png"/>
            <CardsTrabalhos Serviço="Investimento em Tecnologias" Descrição="Incentivar o desenvolvimento e a adoção de tecnologias limpas e inovações que possam ajudar a reduzir as emissões de poluentes do ar e da água, assim como a exposição a produtos químicos perigosos." Imagem="./Imagens/investimento.png"/>
            <CardsTrabalhos Serviço="Parcerias e colaboração" Descrição="Estabelecer e reforçar parcerias e colaborações nacionais e internacionais para compartilhar conhecimentos, experiências e boas práticas em relação às questões abordadas neste alvo." Imagem="./Imagens/parceria.png"/>
            </div>
        </main>
    );
}
