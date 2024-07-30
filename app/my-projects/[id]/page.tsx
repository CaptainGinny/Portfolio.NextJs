import { projects } from '@/constants/projectsList';
import Image from 'next/image';
import Link from 'next/link';
import github from '@/public/assets/icons/github.svg';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function Page({ params } : { params: { id: string } }) {
  const project = projects.find((project) => project.id === parseInt(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, skills, img1, img2, gitHubLink } = project;

  return (
    <div className="flex flex-col bg-[#0C011A] min-h-screen overflow-hidden">
      <div
        className="
          flex flex-row justify-between items-start pt-[28vh] md:pt-[9vh]
          md:justify-center md:items-center md:ml-3 w-full max-w-[100%]
        ">
        <div className="w-1/2 ml-4">
          <Image
            src={img1}
            alt={title}
            layout="responsive"
            width={1920}
            height={1080}
            className="rounded-md object-cover border-4 border-[#FF6B00]"
          />
        </div>
        <div className="w-1/2">
          <Image
            src={img2}
            alt={title}
            layout="responsive"
            width={1920}
            height={1080}
            className="
              -ml-6 mt-10 sm:-ml-20 sm:mt-32 rounded-md object-cover
              border-4 border-[#FF6B00]
            "
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full px-2">
        <h1
          className="
            text-xl md:text-2xl 2xl:text-4xl text-white font-semibold
            text-center mt-6
          ">
          {title}
        </h1>
        <p
          className="
            text-lg md:text-xl 2xl:text-2xl text-gray-400 text-center
            mt-2 mb-4
          ">
          Specialized Skills: {skills}
        </p>
        <Link href={gitHubLink} target="_blank" className="mb-10">
          <button
            className="
              flex items-center justify-center bg-[#FF6B00] h-12 w-48
              md:h-14 md:w-60 text-white font-semibold py-2 px-4
              rounded-lg hover:bg-[#FF8B00] transition duration-300
            ">
            <p className="mr-4 text-black">View Project</p>
            <Image src={github} alt="github" width={30} height={30} />
          </button>
        </Link>
      </div>
    </div>
  );
};