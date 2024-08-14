"use client";

import React from "react";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="z-[999] relative w-full">
      <div className="flex flex-col text-base md:flex-row justify-between bg-stone-100 bg-opacity-80 items-center bottom-0 left-0 w-full md:h-[4.5rem] px-28 text-black text-[0.9rem] font-normal">
        {/* Footer Social Links Section */}
        <div className="flex items-center gap-5 pt-5 md:pt-0 mb-8 md:mb-0">
          <a
            href="https://www.linkedin.com/in/marine-villaume-a6520224b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-950 transition dark:text-black dark:hover:text-gray-500"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/marine.villaume/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-950 transition dark:text-black dark:hover:text-gray-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Credit Section */}
        <div className="flex items-center justify-center mt-2 md:mt-0 pb-5 md:pb-0 lg:pb-0">
        <span>Created by</span>
        &nbsp;
          <a
            href="https://paul-petit.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Paul Petit</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;