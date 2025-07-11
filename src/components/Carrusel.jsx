import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    img: "/images/tenpo_card_1.avif",
    title: "Con Ahorro",
    description:
      "Una tarjeta respaldada por un ahorro en depósito a plazo. Ideal para quienes buscan construir o reconstruir su historial crediticio.",
  },
  {
    img: "/images/tenpo_card_2.avif",
    title: "Prepago",
    description:
      "Disfruta de tu Tenpo Mastercard física para compras internacionales, retiros y transferencias sin complicaciones.",
  },
  {
    img: "/images/tenpo_card_3.png",
    title: "Black & Standard",
    description:
      "Control total de tus finanzas con cuotas sin interés, beneficios exclusivos y un programa de recompensas único.",
  },
];

export default function RotatingCardCarousel() {
  const [angle, setAngle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateLeft = () => {
    setAngle((prev) => prev - 120);
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const rotateRight = () => {
    setAngle((prev) => prev + 120);
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateRight();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-24 text-white font-sans">
      <h2 className="text-center text-3xl font-bold mb-10 text-primary">
        Descubre nuestras tarjetas
      </h2>

      <div className="relative w-full max-w-xl h-[420px] mx-auto perspective-[1000px]">
        <div
          className="w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${angle}deg)`,
            transition: "transform 0.7s ease-in-out",
          }}
        >
          {cards.map((card, i) => {
            const rotation = i * (360 / cards.length);
            return (
              <div
                key={i}
                className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-6 text-center"
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(420px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-[215px] h-[340px] object-cover rounded-xl shadow-xl mb-4"
                />
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-300 max-w-xs">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={rotateLeft}
            className="p-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-black transition"
            aria-label="Anterior"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={rotateRight}
            className="p-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-black transition"
            aria-label="Siguiente"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
