"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { homecardimages as slides } from "../components/serviceimages/Swiperimages";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HomeSwiper() {
  const ref = useRef(null);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);

  return (
    <div ref={ref} className="mt-10">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }} 
        loop
        speed={1200} 
        autoplay={{
          delay: 4200, 
          disableOnInteraction: false,
        }}
        navigation
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-90 md:h-112.5 lg:h-150 overflow-hidden">

              {/* IMAGE with subtle zoom */}
              <motion.div
                style={{ y: imageY }}
                className="absolute inset-0"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  className="object-cover"
                />

                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/35 to-black/10" />
              </motion.div>

              {/* TEXT CONTENT */}
              <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 max-w-2xl text-white"
              >
                <h1 className="font-playfair uppercase tracking-[0.3em] text-sm text-[#D4AF37] mb-4">
                  Artisan Decor
                </h1>

                <h2 className="font-playfair text-3xl md:text-5xl font-light leading-tight">
                  Crafting{" "}
                  <span className="font-semibold text-[#D4AF37]">
                    Elegant Interiors
                  </span>
                  <br /> with Purpose
                </h2>

                <p className="font-inter text-sm md:text-lg mt-6 text-gray-200 leading-relaxed">
                  Artisan Decor delivers premium wall panels and décor solutions
                  designed for modern homes and professional workspaces. With a
                  focus on quality, design, and craftsmanship, we transform
                  interiors into refined, lasting impressions.
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
