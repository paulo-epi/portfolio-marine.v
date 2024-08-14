"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Image from "next/image";
import logo from "@/app/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };

    // Set the initial state based on the current media query status
    setIsSmallScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="z-[999] relative w-full font-great_vibes">
      <motion.div
        className="fixed top-0 left-0 h-[5rem] w-full bg-stone-100 bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] flex justify-between items-center px-6 md:px-28"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center py-2 px-4">
          <Link
            href="/"
            // onClick={scrollToTop}
          >
            <Image src={logo} alt="Logo" width={150} height={36} />
          </Link>
        </div>
        <nav className="flex items-center">
          {isSmallScreen ? (
            <>
              <button
                onClick={toggleMenu}
                className="flex flex-col justify-center items-center lg:hidden px-4"
              >
                <span
                  className={`bg-gray-800 block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${isMenuOpen ?
                      'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
                ></span>
                <span
                  className={`bg-gray-800 block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ?
                      'opacity-0' : 'opacity-100'
                    }`}
                ></span>
                <span
                  className={`bg-gray-800 block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${isMenuOpen ?
                      '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
                ></span>
              </button>
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-[5rem] text-2xl left-0 w-full bg-stone-100 bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] py-4 flex flex-col items-center gap-8 text-black"
                  >
                    {links.map((link) => (
                      <li
                        className="relative group"
                        key={link.hash}
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                      >
                        <Link
                          className="px-3 py-3 transition"
                          href={link.hash}
                          onClick={scrollToTop}
                        >
                          <span className="group-hover:text-gray-500">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          ) : (
            <ul className="flex gap-5 text-[0.9rem] font-semibold text-black">
              {links.map((link) => (
                <motion.li
                  className="relative group"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className="px-3 py-3 transition"
                    href={link.hash}
                    // onClick={scrollToTop}
                  >
                    <span
                      className="group-hover:text-gray-500 text-2xl font-normal"
                    >
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          )}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;