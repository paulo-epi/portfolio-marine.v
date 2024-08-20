"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { creations, starterPack } from "@/lib/data";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Créations",
  description: "Découvrez les créations de Marine Villaume, Community Manager et Chargée de Communication.",
};

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string): void => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="creations" className="mb-10 max-w-[50rem] text-center sm:mt-0 mt-[7.5rem]">
      <motion.h1
        className="mb-10 text-5xl font-medium leading-[1.5] sm:text-4xl text-black"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Mes Créations
      </motion.h1>

      <div className="space-y-16">
        {creations.map((creation, index) => (
          <motion.div
            key={index}
            className="mb-10 w-full flex flex-col items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">{creation.title}</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {creation.images && creation.images.map((image, imgIndex) => (
                <div key={imgIndex} className="relative group">
                  <Image
                    src={image}
                    alt={`${creation.title} ${imgIndex + 1}`}
                    width={320}
                    height={100}
                    quality={100}
                    className="object-cover rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-100 hover:scale-105 cursor-pointer"
                    onClick={() => handleImageClick(image)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform transition-transform duration-300 ease-in-out group-hover:scale-105 pointer-events-none">
                    <FaEye className="text-white text-2xl" />
                  </div>
                </div>
              ))}
              {creation.videos && creation.videos.map((video, vidIndex) => (
                <video
                  key={vidIndex}
                  controls
                  src={video}
                  muted
                  preload="metadata"
                  autoPlay={true}
                  className="w-100 h-50 object-cover rounded-lg shadow-lg cursor-pointer"
                />
              ))}
              {creation.pdf && (
                <object
                  data={creation.pdf}
                  type="application/pdf"
                  className="w-full h-[60vh] md:w-[655px] md:h-[500px] flex items-center justify-center bg-gray-200 rounded-lg shadow-lg text-gray-600 cursor-pointer border-none"
                >
                  <p>
                    Your browser does not support PDFs.
                    <a href={creation.pdf}>Download the PDF</a>
                    .
                  </p>
                </object>
              )}
            </div>
            <p className="text-lg font-normal text-gray-700">{creation.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-black"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: creations.length * 0.1 }}
      >
        <h2 className="text-3xl font-semibold mb-8">Mon Starter Pack de Communicante</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {starterPack.map((app, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={app.logo} alt={app.name} width={80} height={80} className="object-contain" />
              <p className="text-lg font-medium mt-2 text-gray-700">{app.name}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {selectedImage && (
        <div className="fixed inset-0 mt-20 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected"
              width={450}
              height={500}
              className="hover:cursor-pointer"
              onClick={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
}