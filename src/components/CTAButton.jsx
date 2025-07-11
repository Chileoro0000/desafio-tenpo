import { motion } from "framer-motion";


export default function CtaButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        bg-primary text-black 
        px-8 py-4 
        rounded-full 
        font-semibold 
        text-lg 
        shadow-lg 
        hover:bg-primary-dark 
        transition-colors
      "
    >
      Abre tu cuenta gratis
    </motion.button>
  );
}
