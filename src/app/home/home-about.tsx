"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionDivider from "@/components/divider";
import Image from "next/image";
import profilPicture from "@/app/homePicture.png";

const HomeAbout = () => {
  return (
    <section
      id="home"
      className="flex mb-12 max-w-[50rem] flex-col text-center items-center sm:mt-0"
    >
      <motion.div
        className="text-left px-4 mb-28 sm:mb-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl text-black text-center font-bold mb-4">Quels services je propose :</h2>
        <ul className="list-disc text-lg pl-5 space-y-6 text-gray-700">
          <li>
            <strong className="text-xl text-black">Gestion des réseaux sociaux :</strong> Création, planification et publication de contenus pertinents et attrayants sur des plateformes telles que Facebook, Instagram, Twitter, LinkedIn et TikTok pour accroître votre visibilité et l’engagement de votre audience.
          </li>
          <li>
            <strong className="text-xl text-black">Stratégie de contenu :</strong> Élaboration de stratégies de contenu alignées sur vos objectifs commerciaux, incluant la création de blogs, de newsletters et d’autres formats de communication.
          </li>
          <li>
            <strong className="text-xl text-black">Gestion de communauté :</strong> Interaction avec votre audience pour renforcer la fidélité et répondre aux besoins des clients, tout en assurant une veille constante pour anticiper les tendances et les opportunités.
          </li>
          <li>
            <strong className="text-xl text-black">Analyse de performance :</strong> Utilisation d’outils analytiques pour mesurer l’efficacité des campagnes et fournir des rapports détaillés, permettant d’ajuster les stratégies pour obtenir des résultats optimaux.
          </li>
          <li>
            <strong className="text-xl text-black">Création de supports :</strong> Conception d’affiches, de cartes de visite, de faire-part, de flyers, de logos et d’autres éléments visuels pour renforcer votre image de marque et communiquer efficacement avec votre audience.
          </li>
        </ul>
      </motion.div>

      <SectionDivider />

      <div className="grid grid-cols-1 sm:grid-cols-[1fr,1fr] gap-8 sm:gap-12 items-center justify-center sm:justify-start">
        <motion.div
          className="text-left px-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl text-black text-left font-bold mb-4">Pourquoi me choisir :</h2>
          <ul className="list-disc text-lg pl-5 space-y-2 text-gray-700">
            <li>Expérience polyvalente</li>
            <li>Créativité débordante</li>
            <li>Gestion efficace des communautés</li>
            <li>Adaptabilité et réactivité</li>
            <li>Esprit d'équipe et collaboration</li>
            <li>Passion et engagement</li>
            <li>Flexibilité</li>
          </ul>
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
            width="600"
            height="600"
            quality="95"
            priority={true}
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;