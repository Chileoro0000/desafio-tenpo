import { motion } from "framer-motion";
import {
  FaWallet,
  FaPlane,
  FaCreditCard,
  FaCashRegister,
  FaExchangeAlt,
} from "react-icons/fa";

import Card from "../components/CardFicticiaTech";

const benefitsList = [
  { label: "Sin costos de mantención", Icon: FaWallet },
  { label: "Compras en el extranjero", Icon: FaPlane },
  { label: "Tarjeta física", Icon: FaCreditCard },
  { label: "Retiro en cajeros", Icon: FaCashRegister },
  { label: "Transferencias entre bancos", Icon: FaExchangeAlt },
];

export default function Hero() {
  return (
    <section className="bg-black py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading text-white leading-tight"
          >
            Tarjeta Prepago Débito <br />
            <span className="text-primary">Mastercard</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg"
          >
            Compra en miles de comercios nacionales e internacionales sin costos
            de mantención.
          </motion.p>

          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap justify-center md:justify-start gap-6">
            {benefitsList.map(({ label, Icon }, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-gray-300 text-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="w-10 h-10 mb-2 border border-primary rounded grid place-items-center text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Icon size="1.2em" />
                </motion.div>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-4 text-black bg-primary rounded-full text-lg font-semibold shadow-lg hover:bg-primary-dark transition-all"
          >
            Descarga Tenpo
          </motion.button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Card />
        </div>
      </div>
    </section>
  );
}
