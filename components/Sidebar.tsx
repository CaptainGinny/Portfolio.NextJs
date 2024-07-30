"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Transition from "./Transition";

const Sidebar = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const [prevPath, setPrevPath] = useState("/");

  const path = usePathname();

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div
      className="fixed right-2 top-[12%] h-[160px] w-[36px] sm:top-[40%] 
                sm:h-[200px] sm:w-[42px] md:top-[40%] md:h-[200px] md:w-[42px] 
                rounded-full bg-gray-500 bg-opacity-50 z-[20]"
    >
      <AnimatePresence mode="sync">
        {isRouting && <Transition />}
        <div
          className="flex flex-col gap-3 sm:gap-5 pb-3 justify-center 
                     items-center h-full"
        >
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              onClick={() => setIsActive(link.name)}
            >
              <link.icon
                className={`w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] 
                  ${isActive === link.name ? "text-orange-500" : "text-white"} 
                  transition-colors duration-300`}
              />
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;