import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import phoneImage from "../assets/images/phone_fict.png";


function IncomeChart() {
  const data = [100, 200, 150, 300, 250];
  const max = Math.max(...data);
  const points = data
    .map((d, i) => {
      const x = (i * 240) / (data.length - 1);
      const y = 100 - (d / max) * 100;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <motion.svg
      viewBox="0 0 240 100"
      className="w-full h-48"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <line x1="0" y1="100" x2="240" y2="100" stroke="#444" strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="100" stroke="#444" strokeWidth="1" />

      <polyline fill="none" stroke="#03ff94" strokeWidth="3" points={points} />

      {data.map((_, i) => {
        const x = (i * 240) / (data.length - 1);
        const y = 100 - (data[i] / max) * 100;
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill="#03ff94"
            stroke="#fff"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 + i * 0.1 }}
          />
        );
      })}
    </motion.svg>
  );
}

export default function ProductMockup() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);

  const [hovered, setHovered] = useState(false);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-black to-gray-900 py-32 font-sans text-white"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        {/* izquierda: grafico de ingresos */}
        <div className="md:w-1/2">
          <motion.h2
            className="text-3xl font-bold mb-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Evolución de tus ingresos
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-6 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Revisa tu historial financiero y observa cómo tus ingresos crecen
            mes a mes. Tenpo te muestra tus movimientos con claridad y en
            tiempo real.
          </motion.p>

          <motion.div
            className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <IncomeChart />
          </motion.div>
        </div>

        {/* Derecha: mockup del celular */}
        <div className="md:w-1/2 text-center relative">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Control total desde tu celular
          </motion.h2>

          <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative inline-block"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.img
              src={phoneImage}
              alt="Mockup teléfono"
              style={{ rotate, scale }}
              className="w-[180px] md:w-[260px] mx-auto drop-shadow-[0_15px_25px_rgba(3,255,148,0.3)] transition duration-300"
            />
            {hovered && (
              <motion.div
                className="absolute left-1/2 -bottom-14 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full shadow-lg text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ¡Accede al control total de tu cuenta!!
              </motion.div>
            )}
          </motion.div>

          <motion.p
            className="mt-8 max-w-sm text-center text-gray-300 text-base mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Visualiza tu saldo, transfiere al instante y administra tarjetas en
            una interfaz intuitiva. Todo en una sola app.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
