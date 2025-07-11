import FAQ from "../sections/FAQ";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Inversiones from "../sections/Inversiones";
import Testimonials from "../sections/Testimonials";
import ProductMockup from "../sections/ProductMockup";
import RotatingCardCarousel from "../components/Carrusel";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <ProductMockup />
      <Features />
      <RotatingCardCarousel />
      <Inversiones></Inversiones>
      <Testimonials />
      <FAQ />
      <section className="bg-black text-white py-20 text-center"> 
        <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda inmediata?</h2>
        <p className="text-gray-400 mb-8">
          Nuestro asistente inteligente está disponible 24/7 para resolver tus dudas.
        </p>
        <button className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition">
          Hablar con IA
        </button>
      </section>

    </div>
  );
}
// TODO Quitar ia