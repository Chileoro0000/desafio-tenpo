import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const cards = [
  {
    img: '/images/tenpo_card_1.avif',
    title: 'Con Ahorro',
    description:
      'Una Tarjeta de Crédito como cualquier otra pero que nace desde un ahorro que tú realizas y que genera intereses en un depósito a plazo en el Banco Internacional. Ideal para quienes no tienen o quieren reconstruir su historial crediticio.',
  },
  {
    img: '/images/tenpo_card_2.avif',
    title: 'Prepago',
    description: 'La Tarjeta Prepago Tenpo Mastercard te promete una experiencia financiera digital sin igual. Obtén una tarjeta física con un diseño único y disfruta de compras nacionales e internacionales, retiros en cajeros automáticos y transferencias entre bancos sin complicaciones.',
  },
  {
    img: '/images/tenpo_card_3.png',
    title: 'Black & Standard',
    description: '¿Quieres tener control total sobre tus gastos financieros? La Tarjeta de Crédito Tenpo te lo permite. Con la posibilidad de pagar en 3 cuotas sin interés, descuentos exclusivos y beneficios adicionales en restaurantes y tiendas, ¡tienes todo lo que necesitas! Adelanta cuotas, gestiona tu cupo y accede a un programa de recompensas exclusivo.',
  },
];

const CardGallery = () => {

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <StyledWrapper>
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            className="card"
            key={index}
            style={{ backgroundImage: `url(${card.img})`, animationDelay: `${index * 0.2}s` }}
            onClick={() => setSelectedCard(card)}
          >
            <div className="shine" style={{ animationDelay: `${index * 2}s` }} />
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>×</button>
            <div className="modal-content">
              <div className="modal-text">
                <h2>{selectedCard.title}</h2>
                <p>{selectedCard.description}</p>
                <div className="buttons">
                  <button className="primary">Solicitar tarjeta</button>
                  <button className="secondary">Saber más</button>
                </div>
              </div>
              <div className="modal-img">
                <img src={selectedCard.img} alt={selectedCard.title} />
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledWrapper>
  );
};

// animaciones
const floatIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
`;

const shineAnimation = keyframes`
  0% { left: -75%; }
  100% { left: 125%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledWrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  padding: 2rem;
  font-family: sans-serif;

  .card-container {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 215px;
    height: 340px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0 1em 2em rgba(0, 0, 0, 0.3);
    transition: transform 0.4s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    animation: ${floatIn} 0.8s ease-out forwards;
    opacity: 0;
  }

  .card:hover {
    transform: rotateZ(1deg) rotateY(10deg) scale(1.05);
  }

  .shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
    transform: skewX(-20deg);
    animation: ${shineAnimation} 2s ease-in-out infinite;
    z-index: 2;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    animation: ${fadeIn} 0.3s ease;
    padding: 1rem;
    overflow-y: auto;
  }


  .modal {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    width: 100%;
    max-width: 900px;
    max-height: 95vh;
    overflow-y: auto;
    animation: ${floatIn} 0.4s ease;
    position: relative;
  }

  .modal-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: nowrap;
  }

  .modal-text {
    flex: 1;
    min-width: 250px;
  }

  .modal-text h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .modal-text p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }

  .modal-img {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .modal-img img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 16px;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #333;
  }

  .buttons {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .primary {
    background-color: #03ff94;
    color: black;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .secondary {
    background-color: white;
    color: black;
    border: 2px solid black;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    cursor: pointer;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .card {
      width: 160px;
      height: 260px;
    }

    .modal-text h2 {
      font-size: 1rem;
    }

    .modal-text p {
      font-size: 0.95rem;
    }

    .modal-img {
      order: -1; /* Mueve la imagen arriba */
      margin-bottom: 1rem;
    }

    .modal-content {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 0;
    }

    .modal-img {
      order: -1;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .modal-img img {
      max-width: 140px;
      width: 100%;
      height: auto;
      border-radius: 12px;
    }

    .modal-text {
      padding: 0 1rem;
    }


    .modal-img img {
      max-width: 250px;
      width: 100%;
      height: auto;
    }


    .buttons {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 140px;
      height: 230px;
    }

    .buttons {
      flex-direction: column;
      gap: 0.75rem;
    }

    .modal-img img {
      max-width: 200px;
    }

    .modal-text h2 {
      font-size: 1.1rem;
    }

    .modal-text p {
      font-size: 0.8rem;
      line-height: 1.4;
    }

    .modal {
      padding: 1rem;
    }

    .primary,
    .secondary {
      width: 100%;
    }
  }
`;

export default CardGallery;
