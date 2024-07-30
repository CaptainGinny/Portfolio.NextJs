import Particle from "@/components/Particle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="
      flex items-center h-screen relative bg-cover 
      bg-[url('/assets/bg-explosion.png')] pb-[37vh] sm:pb-[1vh]
    ">
      <div className="absolute inset-0 h-full w-full md:w-[80%] z-2">
        <Particle />
      </div>
      <div className="absolute right-5 sm:right-10 md:right-40 bottom-0 z-10">
        <Image
          src="/assets/MoustacheMan.png"
          alt="MoustacheMan"
          width={560}
          height={560}
          className="
            w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem]
            xl:w-[40rem] xl:h-[40rem]
          "
          priority
        />
      </div>
      <Image
        src="/assets/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="
          absolute left-0 top-0 w-[50px] h-[50px]
          sm:w-[100px] sm:h-[100px]
          md:w-[180px] md:h-[180px]
        "
        priority
      />
      <div className="
        flex flex-col gap-3 z-10 pl-5 sm:pl-20 md:pl-20
        lg:pl-40 pt-1 sm:pt-10 md:pt-10 lg:pt-20 text-left
        mt-32 sm:mt-0 xl:max-w-[50vw]
      ">
        <h1 className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          text-white font-semibold max-w-xs sm:max-w-md
          md:max-w-2xl lg:max-w-3xl
        ">
          Code Lover, Complexity Slayer,{" "}
          <span className="text-red-500">Problem Resolver</span>
        </h1>
        <p className="
          text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200
          md:text-gray-400 mb-[5vh] md:pb-2 max-w-xs sm:max-w-md
          md:max-w-lg lg:max-w-xl
        ">
          Navigating Complexity, Mastering Craft: 
          Let`s Code the Future Together!
        </p>
        <div className="
          relative w-20 h-20 sm:w-24 sm:h-24
          md:w-32 md:h-32 lg:w-40 lg:h-40 mt-5
        ">
          <Link href="/my-projects">
            <Image
              src="/assets/rounded-text.png"
              alt="projects"
              width={160}
              height={160}
              className="slow-spin w-full h-full"
              priority
            />
          </Link>
        </div>
      </div>
    </main>
  );
};