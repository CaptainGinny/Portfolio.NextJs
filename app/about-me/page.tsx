import ServiceSlider from '@/components/ServiceSlider';
import Particle from '@/components/Particle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Page () {
  return (
    <div className="
      flex flex-col items-center bg-[#0C011A] min-h-screen 
      overflow-hidden pt-[1vh]
    ">
      <div className="
        flex flex-col items-center gap-2 pt-12 mt-10 md:mt-20 
        w-full px-4 z-10
      ">
        <h1 className="
          text-4xl md:text-5xl text-white text-center font-semibold
        ">
          My Skills<span className="text-orange-500">.</span>
        </h1>
        <p className="
          max-w-[80vw] text-sm md:text-base lg:text-lg xl:text-xl
          2xl:text-2xl text-gray-400 text-center mt-2
        ">
          Emerging front-end star adept in JavaScript, TypeScript, React, 
          and Next.js, poised to innovate and elevate digital experiences.
        </p>
      </div>
      <div className="
        relative flex items-center justify-center w-full mt-10
      ">
        <ServiceSlider />
      </div>
      <Link href="/about-me/contact" passHref>
        <button className="
          relative flex items-center justify-center bg-[#FF6B00] h-12 w-48 
          md:h-14 md:w-60 text-white font-semibold py-2 px-4 rounded-lg 
          hover:bg-[#FF8B00] transition duration-300 mt-5 md:mt-16 z-10
        ">
          Contact Me
        </button>
      </Link>
      <div className="
        absolute -left-36 bottom-6 rotate-12 animate-pulse 
        hidden md:block
      ">
        <Image
          src="/assets/bulb.png"
          alt="bulb"
          width={260}
          height={260}
          className="w-40 h-40 md:w-64 md:h-64"
        />
      </div>
      <div className="absolute inset-0 h-full w-full z-2">
        <Particle />
      </div>
    </div>
  );
};