"use client";

import React from "react";
import { motion } from "framer-motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Marine Villaume pour discuter de vos besoins en communication et de vos projets.',
};

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="mb-12 flex min-h-screen max-w-[50rem] flex-col sm:flex-row items-center pb-0 md:pb-10 justify-center sm:mb-0 sm:mt-0 mt-[7.5rem]"
    >
      {/* Rectangle with shadow effect */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg text-center sm:text-left"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="mb-12 text-5xl leading-[1.5] text-black"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Restons connectés !
        </motion.h1>

        <motion.p
          className="mb-8 text-lg text-left text-black"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Vous avez une question, un projet ou une idée ? En tant que chargée de communication et community manager passionnée, je suis là pour vous aider à donner vie à vos idées et à renforcer votre présence en ligne. N’hésitez pas à me contacter pour discuter de vos besoins en communication ou pour toute autre demande.
        </motion.p>

        <motion.p
          className="mb-8 text-xl text-black"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          💌 Envoyez-moi un message à <a href="mailto:marinevillaume660@gmail.com" className="text-blue-500">marinevillaume660@gmail.com</a>
        </motion.p>

        <motion.p
          className="mb-8 text-xl text-black"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          💬 Suivez-moi sur <a href="https://www.linkedin.com/in/marine-villaume-a6520224b/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-courgette text-2xl">LinkedIn</a>
        </motion.p>

        <motion.p
          className="text-xl text-black"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Je suis impatiente de collaborer avec vous et de faire briller votre projet !
        </motion.p>
      </motion.div>
    </section>
  );
}