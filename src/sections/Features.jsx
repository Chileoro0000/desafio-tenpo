import { motion } from "framer-motion";
import { FaGlobe, FaCreditCard, FaPiggyBank } from "react-icons/fa";

const features = [
  {
    title: "Transferencias globales",
    desc: "Envía dinero internacional sin comisiones escondidas.",
    Icon: FaGlobe,
  },
  {
    title: "Tarjetas virtuales",
    desc: "Crea y gestiona tarjetas virtuales al instante.",
    Icon: FaCreditCard,
  },
  {
    title: "Ahorros automáticos",
    desc: "Redondea tus compras y ahorra sin pensar.",
    Icon: FaPiggyBank,
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-24 font-sans text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Muestras funcionalidades
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map(({ title, desc, Icon }, i) => (
            <motion.div
              key={i}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl text-primary mb-5 group-hover:rotate-12 transition-transform duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Icon />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-300 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
