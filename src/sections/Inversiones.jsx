// https://www.tenpo.cl/productos/inversiones#fondos-mutuos

import { motion } from "framer-motion";
import { FaChartLine, FaWallet, FaPiggyBank, FaRobot } from "react-icons/fa";

const perfiles = [
    { nombre: "Ajedrecista", texto: "Conservador, asegura el capital, bajo retorno." },
    { nombre: "Ciclista", texto: "Precavido, asegura y luego crece. Retorno medio-bajo." },
    { nombre: "Surfista", texto: "Tranquilo, retorno medio y riesgo moderado." },
    { nombre: "Clavadista", texto: "Busca crecimiento, riesgo medio-alto." },
    { nombre: "Paracaidista", texto: "Asume riesgo alto por mayor retorno." },
];

const beneficios = [
    {
        icon: FaChartLine,
        titulo: "Invierte desde $1.000",
        texto: "Invierte fácil y sin mínimos elevados.",
    },
    {
        icon: FaWallet,
        titulo: "6 Fondos Mutuos",
        texto: "Diversifica según tu perfil de riesgo.",
    },
    {
        icon: FaPiggyBank,
        titulo: "Comisión desde 1,15%",
        texto: "Una de las más competitivas del mercado.",
    },
    {
        icon: FaRobot,
        titulo: "Reglas automáticas",
        texto: "Redondeo, porcentaje y automatización de ahorros.",
    },
];

export default function Inversiones() {
    return (
        <section className="bg-black text-white py-24 px-6 font-sans">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8 text-primary"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Inversiones Tenpo
                </motion.h2>

                <p className="text-center max-w-3xl mx-auto text-gray-300 mb-12">
                    Invertir nunca fue tan fácil. Accede a fondos mutuos, reglas automáticas y elige tu perfil de riesgo en una app 100% digital y segura.
                </p>

                <div className="grid md:grid-cols-4 gap-8 mb-20">
                    {beneficios.map((b, i) => (
                        <motion.div
                            key={i}
                            className="bg-white/5 p-6 rounded-xl text-center hover:bg-white/10 transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <b.icon className="text-primary text-3xl mb-4 mx-auto" />
                            <h3 className="font-bold text-lg mb-2">{b.titulo}</h3>
                            <p className="text-gray-300 text-sm">{b.texto}</p>
                        </motion.div>
                    ))}
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-center text-white">¿Cuál es tu perfil de riesgo?</h3>
                <div className="grid md:grid-cols-5 gap-6 mb-16">
                    {perfiles.map((p, i) => (
                        <motion.div
                            key={i}
                            className="bg-white/5 p-5 rounded-xl hover:bg-white/10 text-center transition"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h4 className="text-primary font-bold text-lg mb-2">{p.nombre}</h4>
                            <p className="text-gray-300 text-sm">{p.texto}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <button className="bg-primary text-black font-bold px-8 py-4 rounded-full text-lg hover:brightness-110 transition">
                        ¡Quiero invertir!
                    </button>
                    <p className="text-xs text-gray-400 mt-3 max-w-lg mx-auto">
                        Infórmese de las características esenciales de la inversión en Fondos Mutuos administrados por Credicorp Capital Asset Management S.A.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
