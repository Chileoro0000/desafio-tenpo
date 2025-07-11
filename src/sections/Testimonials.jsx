import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  { name: "Gabriel R.", text: "Tenpo me ayuda a ahorrar sin esfuerzo. ¡Recomendada!" },
  { name: "Juan P.", text: "Las tarjetas virtuales me salvan cada vez que compro online." },
  { name: "Valentina M.", text: "La app es súper intuitiva y rápida para hacer transferencias." },
  { name: "Carlos T.", text: "¡Puedo usarla incluso en el extranjero sin problemas!!!" },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16 font-heading">
          Lo que dicen nuestros usuarios
        </h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10 w-max"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...reviews, ...reviews].map((r, i) => (
              <motion.div
                key={i}
                className="min-w-[280px] md:min-w-[340px] bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl shadow-xl flex-shrink-0 hover:shadow-[#03ff94]/50 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaQuoteLeft className="text-primary text-2xl mb-4" />
                <p className="text-gray-200 italic leading-relaxed">“{r.text}”</p>
                <p className="mt-4 text-primary font-semibold">— {r.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
