"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import profilPicture from "@/app/pp.jpg"

export const metadata = {
  title: "Acceuil | Marine Villaume",
  description: "Community Manager et Chargée de Communication",
};

const Intro = () => {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 sm:mt-0 mt-[7.5rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
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
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 md:px-28 text-2xl font-medium !leading-[1.5] sm:text-4xl text-black"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">HELLO ! 🌸</span>
        <br />
        <span>Je m'appelle Marine Villaume, Community
          Manager et Chargée de Communication, basée au
          cœur du Grand Est et des Vosges.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="/contact"
          className="text-xl group bg-gray-900 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition shadow"
        >
          Contactez moi ici{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {/* <a
          className="text-2xl group bg-white text-black px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black shadow"
          href="/assets/resume.pdf"
          download
        >
          Téléchargez mon CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a> */}

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-3 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack shadow"
          href="https://www.linkedin.com/in/marine-villaume-a6520224b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-3 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack shadow"
          href="https://www.instagram.com/marine.villaume/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
