import { motion } from "framer-motion";
import { FaGift, FaRocket, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";

import Promociones from "../components/Promos";
import CardGrid from "../components/CardsBeneficios";


const cards = [
  {
    title: "Tarjeta de Crédito",
    description:
      "Control total de tus gastos financieros. Paga en 3 cuotas sin interés, accede a descuentos exclusivos y recompensas.",
    cta: "Solicitar tarjeta",
    start: "#03ff94",
    end: "#99ffd5",
    image: "/images/tenpo_card_3.png",
    features: ["3 cuotas sin interés", "Cashback", "Chip EMV"],
  },
  {
    title: "Tarjeta Prepago",
    description:
      "Compras nacionales e internacionales sin complicaciones. Retira en cajeros y transfiere entre bancos desde la app.",
    cta: "Solicita tu tarjeta",
    start: "#004766",
    end: "#008fcc",
    image: "/images/tenpo_card_2.avif",
    features: ["Recarga fácil", "Sin comisiones", "Mastercard"],
  },
  {
    title: "Tarjeta con Ahorro",
    description:
      "Ideal para construir o recuperar tu historial crediticio, respaldada por un depósito a plazo.",
    cta: "Solicitar tarjeta",
    start: "#00b2ff",
    end: "#66d0ff",
    image: "/images/tenpo_card_1.avif",
    features: ["Depósito seguro", "Historial crediticio", "Tasa fija"],
  },
];

const tenpesos = [
  {
    title: "Misiones personalizadas",
    desc: "Recibe desafíos únicos y gana más devoluciones por usar la app.",
    icon: FaRocket,
  },
  {
    title: "Devolución automática",
    desc: "Obtén tus Tenpesos al instante, sin esperas ni papeleos.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Sin mínimos de canje",
    desc: "Desde 1 Tenpeso puedes usar tus devoluciones como quieras.",
    icon: FaGift,
  },
  {
    title: "Seguridad garantizada",
    desc: "Tus datos están cifrados y protegidos en todo momento.",
    icon: FaShieldAlt,
  },
];

export default function Beneficios() {
  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #000000 95%, #03FF94 100%)"
      }}
      className="text-white py-24 px-6 font-sans"
    >
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl font-bold mb-4 font-heading">
          Beneficios Tenpo
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Con Tenpo llevas tu dinero al siguiente nivel: tarjetas únicas, cashback en cada compra y una app que lo hace todo.
        </p>
      </div>

      <CardGrid cards={cards} />
      <Promociones />

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6 font-heading">
          Tenpesos: Gana por usar tu App
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          ¡Cada acción cuenta! Usa tu tarjeta, completa misiones y recibe Tenpesos en tu cuenta automáticamente.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {tenpesos.map(({ title, desc, icon: Icon }, i) => (
          <motion.div
            key={i}
            className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
          >
            <motion.div
              className="text-primary text-3xl mb-4"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Icon />
            </motion.div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto mt-32 text-center">
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¡Empieza a disfrutar los beneficios de Tenpo hoy!
        </motion.h3>
        <motion.button
          className="mt-4 px-8 py-4 bg-primary text-black font-semibold rounded-full"
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Descarga la App
        </motion.button>
      </div>
    </section>
  );
}
