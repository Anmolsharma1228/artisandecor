"use client";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Home,
  PaintRoller,
  Leaf,
  ToolCase,
  CheckCircle,
  Eye,
  Goal,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs({ showCards = false }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 md:py-20 text-gray-800 mt-6 md:mt-10">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
          About Artisan Decor – Interior Décor Experts in Delhi-NCR
        </h2>
        <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
          Premium interior décor solutions crafted for modern Indian homes,
          offices, and commercial spaces across Delhi-NCR.
        </p>
      </motion.div>

      {showCards && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="bg-linear-to-br from-orange-50 to-green-50 p-8 rounded-2xl shadow">
            <div className="flex items-center gap-4">
              <Users className="text-3xl text-orange-600" />
              <h3 className="text-2xl font-semibold mb-2">Who We Are!</h3>
            </div>
            <p className="text-gray-700">
              Artisan Decor is a Delhi-based interior décor brand dedicated to
              transforming everyday spaces into refined living environments. We
              collaborate closely with homeowners, architects, and builders to
              deliver décor solutions that balance elegance, durability, and
              functionality—crafted to suit modern lifestyles and diverse
              climates.
            </p>
          </div>

          <div className="bg-linear-to-br from-orange-50 to-green-50 p-8 rounded-2xl shadow">
            <div className="flex items-center gap-4">
              <BookOpen className="text-3xl text-orange-600" />
              <h3 className="text-2xl font-semibold mb-2">Our Story</h3>
            </div>
            <p className="text-gray-700">
              Artisan Decor was founded on the belief that spaces should feel as
              beautiful as they appear. Rooted in craftsmanship and thoughtful
              design, we create décor solutions that blend timeless artistry
              with contemporary living. Every element is carefully considered to
              bring warmth, harmony, and character to each space.
            </p>
          </div>

          <div className="bg-linear-to-br from-orange-50 to-green-50 p-8 rounded-2xl shadow">
            <div className="flex items-center gap-4">
              <Goal className="text-3xl text-orange-600" />
              <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            </div>
            <p className="leading-relaxed text-gray-700">
              Our mission is to elevate everyday spaces through refined
              craftsmanship and intentional design. We focus on creating décor
              solutions that reflect quality, individuality, and lasting
              value—designed with precision, inspired by tradition, and tailored
              for modern interiors and evolving lifestyles.
            </p>
          </div>

          <div className="bg-linear-to-br from-orange-50 to-green-50 p-8 rounded-2xl shadow">
            <div className="flex items-center gap-4">
              <Eye className="text-3xl text-orange-600" />
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              Our vision is to become a trusted name in artisan-crafted interior
              décor. We aim to create spaces defined by subtle luxury and honest
              materials. Each design is thoughtfully crafted to feel calm,
              personal, and timeless. Where refined craftsmanship meets modern
              elegance, naturally.
            </p>
          </div>
        </motion.div>
      )}

      {/* What We Offer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="font-playfair text-2xl font-semibold text-center mb-10">
          Interior Décor & Wall Design Services We Offer
        </h2>

        <div className="font-inter grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <PaintRoller size={32} />,
              title: "Designer Wallpapers",
              desc: "Premium wallpapers for living rooms, bedrooms, offices, and feature walls.",
            },
            {
              icon: <Leaf size={32} />,
              title: "WPC & PVC Panels",
              desc: "Waterproof, termite-resistant wall panels with elegant finishes.",
            },
            {
              icon: <ToolCase size={32} />,
              title: "Wooden Flooring",
              desc: "Luxurious wooden flooring for warm and timeless interiors.",
            },
            {
              icon: <Home size={32} />,
              title: "Decorative Louvers",
              desc: "Modern louvers for TV units, ceilings, and accent walls.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-orange-600 mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 p-4 rounded-2xl"
      >
        <h2 className="font-playfair text-2xl font-semibold text-center mb-8">
          Why Choose Artisan Decor for Interior Décor Solutions
        </h2>

        <div className="font-inter grid md:grid-cols-2 gap-6">
          {[
            "We believe great design begins with thoughtful craftsmanship.",
            "Every detail is carefully considered to create refined, lasting spaces.",
            "We use premium materials chosen for beauty, strength, and longevity.",
            "Our designs balance timeless aesthetics with modern functionality.",
            "Each project is approached with a personalized design philosophy.",
            "We value honest materials and precise execution in every finish.",
            "Our work is guided by simplicity, elegance, and subtle luxury.",
            "We collaborate closely with clients to bring their vision to life.",
            "Durability and quality remain at the core of everything we create.",
            "With Artisan Decor, spaces feel intentional, calm, and enduring.",
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="text-green-600 mt-1" />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </motion.div>
      {showCards && <ServiceCard />}
    </section>
  );
}
