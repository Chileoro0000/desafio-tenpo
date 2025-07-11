import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";


export default function CardGrid({ cards }) {
    return (
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-32">
            {cards.map((card, i) => (
                <motion.div
                    key={i}
                    className="relative flex flex-col rounded-2xl p-6 overflow-hidden cursor-pointer"
                    style={{
                        backgroundImage: `linear-gradient(to bottom right, ${card.start}, ${card.end})`,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, type: "spring", stiffness: 160 }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 25px 35px rgba(0,0,0,0.3)",
                    }}
                >
                    <FaLock className="absolute top-4 right-4 text-white text-xl opacity-80" />
                    <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-40 object-contain mb-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.05 }}
                    />
                    <h2 className="text-2xl font-bold mb-3 text-black drop-shadow-sm">
                        {card.title}
                    </h2>
                    <p className="text-sm mb-4 text-black/80">{card.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {card.features?.map((feat, idx) => (
                            <motion.span
                                key={idx}
                                className="bg-black/20 text-black text-xs px-3 py-1 rounded-full"
                                initial={{ opacity: 0.7, scale: 0.9 }}
                                whileHover={{ scale: 1.1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                {feat}
                            </motion.span>
                        ))}
                    </div>

                    <motion.button
                        className="mt-auto bg-black text-white px-5 py-2 rounded-full font-semibold self-start"
                        whileHover={{
                            y: -3,
                            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        {card.cta}
                    </motion.button>
                </motion.div>
            ))}
        </div>
    );
}
