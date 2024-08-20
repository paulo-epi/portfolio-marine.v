"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SectionDivider from "@/components/divider";
import profilPicture from "@/app/ppp.jpg";
import Typewriter from 'react-ts-typewriter';
import { texts } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez qui est Marine Villaume, Community Manager et Chargée de Communication.",
};

export default function AboutPage() {
  return (
    <section
      id="about"
      className="mb-12 flex flex-col sm:flex-row items-center justify-center sm:mb-0 sm:mt-0 mt-[7.5rem]"
    >
      {/* Left column for main top text */}
      <div className="text-center sm:text-left max-w-[75rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr,1fr] gap-8 sm:gap-12 items-center justify-center sm:justify-start">
          <motion.div
            className="order-2 sm:order-1"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.h1
              className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] text-center sm:text-4xl text-black"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Je suis Marine Villaume, Community Manager et Chargée de Communication.
            </motion.h1>

            <motion.p
              className="px-4 text-2xl text-center text-black"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Typewriter
                loop={true}
                cursor={true}
                speed={120}
                delay={1000}
                text={texts} />
            </motion.p>
          </motion.div>

          {/* Right column for profile picture */}
          <motion.div
            className="order-1 sm:order-2 max-w-[50%] mx-auto"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilPicture}
              alt="Marine Villaume"
              width="280"
              height="280"
              quality="95"
              priority={true}
              className="shadow-xl mx-auto rounded-full"
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center w-full my-8">
          <SectionDivider />
        </div>

        {/* Text after the divider */}
        <div className="max-w-[50rem] mx-auto text-center sm:text-left">
          <motion.p
            className="mb-10 px-4 text-lg text-left text-gray-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <span className="font-bold text-3xl text-black">Qui suis-je ?</span>
            <br />
            Moi, c'est Marine Villaume !🌼 Depuis toujours, je suis fascinée par tout ce qui touche aux nouvelles
            technologies et à la communication. C'est donc tout naturellement que j'ai décidé de transformer cette
            passion en métier. Ce qui me motive ? Aider les marques et les entreprises à se démarquer, à créer du contenu
            impactant et à développer des stratégies de communication qui font vraiment la différence. Si vous cherchez
            quelqu'un pour donner un coup de boost à votre visibilité et faire passer vos messages de manière
            authentique et efficace, je suis là pour vous accompagner ! 🚀
          </motion.p>

          <motion.p
            className="mb-10 px-4 text-lg text-left text-gray-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <span className="font-bold text-3xl text-black">Quelques Fun Facts sur moi 🎉</span>
            <br />
            Je suis une curieuse insatiable ! Toujours prête à apprendre, je n'hésite jamais à explorer de nouvelles perspectives pour enrichir mes compétences. J'aime toucher à tout et élargir mes horizons, que ce soit dans le domaine professionnel ou personnel.
          </motion.p>

          <motion.p
            className="mb-10 px-4 text-lg text-left text-gray-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            <span className="font-bold text-3xl text-black">Créer, c'est mon crédo ! 🎨</span>
            <br />
            La création de contenu, c’est vraiment mon domaine ! Que ce soit pour véhiculer des messages inspirants ou
            capturer des instants uniques, j’adore donner vie aux idées. Vidéos, affiches, peu importe le format, je suis là
            pour ça ! Grâce à la suite Adobe, j’ai découvert un univers de possibilités infinies.
          </motion.p>

          <motion.p
            className="mb-10 px-4 text-lg text-left text-gray-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
            <span className="font-bold text-3xl text-black">Passion équitation 🐴</span>
            <br />
            Les chevaux, c'est ma grande passion ! Depuis mes 6 ans, je pratique l'équitation et cela m'a appris tant de choses : patience, responsabilité, empathie et un profond respect pour les animaux. En plus, cela m'a forgé un esprit d'équipe en béton.
          </motion.p>

          <motion.p
            className="mb-0 md:mb-10 px-4 text-lg text-gray-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          >
            Alors, que vous ayez besoin de quelqu'un pour booster votre communication, créer des contenus captivants ou simplement pour échanger sur les dernières tendances en communication, je suis votre personne ! Travaillons ensemble et faisons des étincelles !
          </motion.p>
        </div>
      </div>
    </section>
  );
}