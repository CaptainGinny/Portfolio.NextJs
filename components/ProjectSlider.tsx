'use client';
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projectsList";
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectSlider = () => {
  return (
    <div className="relative w-full h-auto sm:w-[80%] md:w-[80%] xl:w-[80%] 
                2xl:w-[80%] justify-center mx-auto px-3 transform 
                group-hover:scale-105 transition-transform duration-300">
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="relative group cursor-pointer mt-10"
          >
            <Image
              src={project.img}
              alt="project image"
              width={1024}
              height={1024}
              className="w-full h-[50vh] sm:h-[50vh] md:h-[50vh] 2xl:h-[60vh] 
                        rounded-md object-cover border-2 border-[#FF6B00]"
            />
            <div
              className="absolute inset-0 flex flex-col items-center 
                          justify-center bg-black bg-opacity-50 
                          transition-opacity duration-300 rounded-md p-4 
                          opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
            >
              <h2
                className="text-xl md:text-2xl 2xl:text-4xl w-full text-white 
                            font-bold text-center"
              >
                {project.title}
              </h2>
              <h3
                className="text-white text-sm md:text-lg 2xl:text-2xl mt-2 
                            w-[75vw] text-center"
              >
                {project.description}
              </h3>
              <Link
                href={`/my-projects/${project.id}`}
                className="text-orange-500 text-2xl md:text-2xl 2xl:text-4xl 
                            mt-2 w-full text-center underline 
                            hover:underline-offset-1"
              >
                &#128064; Click to view &#10145;
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;