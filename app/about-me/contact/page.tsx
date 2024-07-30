import Image from 'next/image';
import Link from 'next/link';
import Particle from '@/components/Particle';
import foto from '@/public/assets/foto.png';

export default function Contacts() {
  return (
    <div className="
      relative min-h-screen bg-[#0C011A] text-white flex flex-col 
      md:flex-row items-center pt-[1vh]
    ">
      <main className="
        flex flex-col justify-center items-center w-full md:w-3/4 
        py-10 px-12 mt-[10vh] z-10
      ">
        <div className="
          w-full max-w-4xl mx-auto flex flex-col items-center
        ">
          <h1 className="
            text-4xl md:text-4xl xl:text-5xl 2xl:text-7xl 
            text-center mb-5 md:mb-10 text-white font-semibold
          ">
            Contacts
          </h1>
          <ul className="
            flex flex-col justify-center items-center 
            space-y-1 md:space-y-6
          ">
            <li className="flex flex-col items-center">
              <h2 className="
                text-2xl xl:text-4xl 2xl:text-5xl font-medium mb-3
              ">
                Location
              </h2>
              <p className="text-lg xl:text-2xl 2xl:text-2xl">
                Minsk, Belarus
              </p>
            </li>
            <li className="flex flex-col items-center text-center">
              <h2 className="
                text-2xl xl:text-4xl 2xl:text-5xl font-medium mb-3
              ">
                Telegram / WhatsApp
              </h2>
              <p className="text-lg xl:text-2xl 2xl:text-4xl">
                <Link 
                  href="tel:+375444818077" 
                  className="text-blue-400 hover:underline"
                >
                  +375 (44) 481-80-77
                </Link>
              </p>
            </li>
            <li className="flex flex-col items-center text-center">
              <h2 className="
                text-2xl xl:text-4xl 2xl:text-5xl font-medium mb-3
              ">
                Email
              </h2>
              <p className="text-lg xl:text-2xl 2xl:text-4xl">
                <Link 
                  href="mailto:ginnymalko@gmail.com" 
                  className="text-blue-400 hover:underline"
                >
                  ginnymalko@gmail.com
                </Link>
              </p>
            </li>
            <Link 
              href="https://transparent-aspen-664.notion.site/IT-CV-Evgeny-Malko-426f01d8e06a40df822cf1acecf0e69e"
              target="_blank"
            >
              <button className="
                flex items-center justify-center bg-[#FF6B00] 
                h-12 w-48 md:h-14 md:w-60 text-white font-semibold 
                py-2 px-4 rounded-lg hover:bg-[#FF8B00] 
                transition duration-300 mt-5
              ">
                View CV
              </button>
            </Link>
          </ul>
        </div>
      </main>
      
      <div className="
        absolute items-center bottom-0 right-0 rounded-md 
        sm:rounded-l-md z-10
      ">
        <Image
          src={foto}
          alt="MyFoto"
          width={560}
          height={560}
          className="
            w-[10rem] h-[12rem] md:w-[20rem] md:h-[25rem] 
            lg:w-[30rem] lg:h-[35rem] 2xl:w-[40rem] 2xl:h-[50rem]
          "
        />
      </div>
      <div className="
        absolute -left-28 md:-left-40 bottom-8 rotate-12 
        animate-pulse
      ">
        <Image
          src="/assets/bulb.png"
          alt="bulb"
          width={260}
          height={260}
          className="w-52 h-52 md:w-80 md:h-80"
        />
      </div>
      <div className="absolute inset-0 h-full w-full z-2">
        <Particle />
      </div>
    </div>
  );
};