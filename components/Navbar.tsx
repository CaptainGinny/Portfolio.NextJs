import { Socials } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div 
      className="fixed top-0 left-0 right-0 bg-transparent z-[20] w-full 
                flex items-center justify-between gap-5 px-8 sm:px-10 
                md:px-20 lg:px-40 py-8 shadow-lg"
    >
      <h1 
        className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                  font-bold flex-shrink-0"
      >
        Evgeny <span className="font-thin">Malko</span>
        <span className="text-orange-500">.</span>
      </h1>
      <div 
        className="flex items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8"
      >
        {Socials.map((social) => (
          <Link
            key={social.name}
            href={social.link}
            target="_blank"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
              className="sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;