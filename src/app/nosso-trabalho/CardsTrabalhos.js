// CardsTrabalhos.js
import React, { useState } from "react";

const CardsTrabalhos = ({ Serviço, Descrição, Imagem }) => {
  const [showBack, setShowBack] = useState(false);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      {!showBack ? (
        <div className="card-face">
            <div className="nome">
              <div></div>
             <p className="servico">{Serviço}</p>
            </div>
          <div className="card-bottom">
            <div className="card-middle">
              <div className="validade">
                <div className="descricao">
                  <img src={Imagem} className="card-image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-back">
          <div></div>
          <div ><p className="descricao2">{Descrição}</p></div>
        </div>
      )}
      <div><p className="virar">clique para virar</p></div>
    </div>
  );
};
export default CardsTrabalhos;
