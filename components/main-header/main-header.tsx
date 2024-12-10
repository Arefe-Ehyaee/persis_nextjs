"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/components/images/Slice 1.png";
import NavLink from "./nav-link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "motion/react-client";

export default function MainHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between lg:mx-52 px-4 mt-4 mb-20">
        <Link href="/" className="flex">
          <Image
            src={logo}
            alt="logo"
            className="w-[37px] h-[29px] my-auto mr-3"
          />
          <p className="font-inter text-4xl font-bold text-white">Persis</p>
        </Link>

        <nav className="font-kalameh text-xl my-auto text-white">
          <ul className="hidden md:flex gap-8">
            <li>
              <NavLink href={"/contact"}>ارتباط با ما</NavLink>
            </li>
            <li>
              <NavLink href={"/about"}>درباره ما</NavLink>
            </li>
            <li>
              <NavLink href={"/products"}>محصولات</NavLink>
            </li>
          </ul>
        </nav>

        <button
          className="space-y-1 group absolute right-3 top-7 mx-0 md:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
        </button>

        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col gap-8 font-kalameh text-xl bg-white w-screen absolute -top-0 right-0 space-y-3 py-10 duration-150 justify-end">
                <div
                  className="absolute top-0 right-0 px-6 my-6"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  <svg
                    className="h-6 w-6 text-[#043873]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex justify-center w-full py-4 hover:bg-gray-50"
                >
                  <NavLink href={"/products"}>محصولات</NavLink>
                </motion.li>
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex justify-center w-full py-4 hover:bg-gray-50"
                >
                  <NavLink href={"/about"}>درباره ما</NavLink>
                </motion.li>
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex justify-center w-full py-4 hover:bg-gray-50"
                >
                  <NavLink href={"/contact"}>ارتباط با ما</NavLink>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
