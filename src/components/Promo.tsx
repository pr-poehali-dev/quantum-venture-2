import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/62d207f9-4b1e-4076-8225-3ff58b2aeb2e/files/d173975f-304b-4a98-be37-f98c0986d569.jpg"
            alt="Энергия движения"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Твоя энергия — твоё топливо
      </h3>

      <p className="absolute bottom-24 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10 leading-tight">
        Каждое движение — шаг к лучшей версии себя. Начни сегодня, прямо там, где ты есть.
      </p>

      <Link
        to="/contacts"
        className="absolute bottom-10 right-6 z-10 bg-white text-black px-6 py-2.5 uppercase tracking-wide text-sm font-medium hover:bg-neutral-200 transition-colors"
      >
        Начать сейчас
      </Link>
    </div>
  );
}
