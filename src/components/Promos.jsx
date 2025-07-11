import { motion } from 'framer-motion';

const promos = [
  {
    image: 'https://cdn.prod.website-files.com/649515d851b438f5fe7d2967/68630531b0cfb705acfad5c6_685e9c10190783eb6489c996_card.png',
    logo: 'https://cdn.prod.website-files.com/649515d851b438f5fe7d2967/68630531b0cfb705acfad5ba_6810e68c6400aafe17d0f612_logo-shein.png',
    categories: ['Tarjeta de Crédito', 'Todo Chile'],
    day: 'Miércoles',
    title: 'Hasta 20% de devolución en Tenpesos en Shein',
    desc: 'Pagando con tus tarjetas Tenpo Mastercard.',
    link: '#',
  },
  {
    image: 'https://cdn.prod.website-files.com/649515d851b438f5fe7d2967/6870125fa7004c2ef91c3f85_Ecosistema%20Samsung_v3.jpg',
    logo: 'https://cdn.prod.website-files.com/649515d851b438f5fe7d2967/68630530e809905e8078eb2c_685d94e831fc583e4115922a_marca.png',
    categories: ['Tarjeta de Crédito', 'Todo Chile'],
    day: 'Todos los días',
    title: '$30.000 de devolución por compras sobre $400.000',
    desc: 'Pagando con tu tarjeta de crédito y tarjeta con ahorro en samsung.com.',
    link: '#',
  },
  {
    image: 'https://cdn.prod.website-files.com/649515d851b438f5fe7d2967/6863052d5f27e755c91d7dc2_6797786b94238fe2833c82a1_67768a911c184d367befde84_67477bfc87d792d05d5d7a22_67243535371b861ab8439004_66cf3cc2a87b02bc08afb1e7_66ab0646cd73b718688cfe59_66aaac608e05182399aad1a8_img-bencina.jpeg',
    logo: 'https://cdn.prod.website-files.com/649515d851b438f5fe7d2967/6863052c5f27e755c91d7d9a_6797786b94238fe2833c8293_67768a911c184d367befde87_67477bfc87d792d05d5d7a1e_67243535371b861ab8439000_66cf3cc2a87b02bc08afb1e2_66ab0646cd73b718688cfe52_66aaac608e05182399aad1a4_66a94a56488e852fc703eac6_logo-apps-bencina.png',
    categories: ['Tarjeta Física', 'Todo Chile'],
    day: 'Viernes',
    title: 'Todos los Viernes de Julio',
    desc: 'Gana hasta $300 Tenpesos pagando con tus tarjetas Tenpo Mastercard.',
    link: '#',
  },
];

export default function Promociones() {
  return (
    <section className="bg-transparent py-24 px-4 lg:px-6">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white">
          Promociones Exclusivas
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {promos.map((promo, i) => (
          <motion.div
            key={i}
            className="relative bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: 'spring', stiffness: 140 }}
            whileHover={{ scale: 1.04, boxShadow: '0 25px 40px rgba(0,0,0,0.6)' }}
          >
            {/* Barra de acento */}
            <div className="h-1 bg-gradient-to-r from-[#03FF94] to-[#6AFFC1]" />

            {/* Imagen con zoom */}
            <div className="relative">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
              <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <img
                  src={promo.logo}
                  alt="logo"
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {promo.categories.map((cat, idx) => (
                  <span
                    key={idx}
                    className="bg-[#414141] text-[#D0D0D0] text-xs px-3 py-1 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
                <span className="bg-[#03FF94] text-[#121212] text-xs px-3 py-1 rounded-full">
                  {promo.day}
                </span>
              </div>

              <h3 className="text-[#FFFFFF] text-lg lg:text-xl font-heading font-semibold">
                {promo.title}
              </h3>
              <p className="text-[#808080] text-sm lg:text-base">
                {promo.desc}
              </p>

              <a
                href={promo.link}
                className="inline-block mt-2 text-[#03FF94] border border-[#03FF94] px-5 py-2 rounded-full text-sm lg:text-base font-medium hover:bg-[#03FF94] hover:text-[#121212] transition"
              >
                Saber más
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
