"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Expériences',
  description: 'Découvrez les expériences professionnelles de Marine Villaume, Community Manager et Chargée de Communication.',
};

export default function ExperiencesPage() {
  return (
    <section id="experiences" className="mb-12 max-w-[50rem] text-center sm:mt-0 mt-[7.5rem]">
      <motion.h1
        className="mb-10 text-5xl font-medium leading-[1.5] text-black"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Expériences
      </motion.h1>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Experiences */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {experiences.map((section, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-400 group-[.is-active]:via-slate-300 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                    <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                  </svg>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900 text-2xl">{section.role}</div>
                    <time className="font-caveat font-medium text-indigo-500">{section.date}</time>
                  </div>
                  <div className="text-slate-500">{section.title}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}