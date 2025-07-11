import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "¿Es gratis abrir una cuenta?",
    a: "Sí, no cobramos cuotas mensuales ni costos de mantención.",
  },
  {
    q: "¿Puedo pausar mi tarjeta?",
    a: "Sí, puedes pausar y reactivar tu tarjeta desde la app en cualquier momento.",
  },
  {
    q: "¿Cómo retiro efectivo?",
    a: "Retira efectivo en cajeros automáticos con tu tarjeta Tenpo sin comisiones ocultas.",
  },
  {
    q: "¿Qué pasa si pierdo mi tarjeta?",
    a: "Puedes bloquearla instantáneamente desde la app y solicitar una reposición.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-heading">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#03ff94]/20 to-[#99ffd5]/20 hover:from-[#03ff94]/30 hover:to-[#99ffd5]/30 transition"
                >
                  <span className="text-left text-gray-800 font-semibold">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-primary"
                  >
                    <FaChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-4 overflow-hidden"
                    >
                      <p className="py-4 text-gray-600">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
