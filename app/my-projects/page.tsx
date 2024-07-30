import ProjectSlider from "@/components/ProjectSlider";
import Particle from "@/components/Particle";

export default function Page() {
  return (
    <div 
      className="flex flex-col items-center bg-[#0C011A] min-h-screen 
                 overflow-hidden pt-[1vh]"
    >
      <div className="absolute inset-0 h-full w-full z-2">
        <Particle />
      </div>
      <div 
        className="flex flex-col items-center gap-2 pt-12 mt-10 md:mt-20 
                   w-full px-4 z-10"
      >
        <h1 
          className="text-4xl md:text-5xl text-white text-center 
                     font-semibold"
        >
          My Works<span className="text-red-500">.</span>
        </h1>
        <p 
          className="max-w-[80vw] text-sm md:text-base lg:text-lg 
                     xl:text-xl 2xl:text-2xl text-gray-400 text-center 
                     mt-2"
        >
          Welcome to the creative hub of a front-end developer in the making!
          My portfolio is a digital diary, each page filled with the chronicles
          of my coding journey. Dive in and experience the evolution of a tech
          artisan!
        </p>
      </div>
      <ProjectSlider /> 
    </div>
  );
};