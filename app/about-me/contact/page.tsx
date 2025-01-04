// import Image from 'next/image';
// import Link from 'next/link';
// import Photo from '@/components/Photo';

// export default function Contacts() {
//   return (
//     <div className="
//       relative min-h-screen bg-[#0C011A] text-white flex flex-col 
//       md:flex-row items-center 
//     ">
//       <main className="
//         flex flex-col justify-center items-center w-full md:w-3/4 
//         py-1 px-10 mt-[10vh] z-10
//       ">
//         <div className="
//           w-full max-w-4xl mx-auto flex flex-col items-center
//         ">
//           <h1 className="
//             text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl 
//             text-center mt-5 mb-3 md:mb-10 text-white font-semibold
//           ">
//             Contacts
//           </h1>
//           <ul className="
//             flex flex-col justify-center items-center 
//             space-y-1 md:space-y-6
//           ">
//             <li className="flex flex-col items-center">
//               <h2 className="
//                 text-xl xl:text-4xl 2xl:text-5xl font-medium mb-1
//               ">
//                 Location
//               </h2>
//               <p className="text-md xl:text-2xl 2xl:text-2xl">
//                 Minsk, Belarus
//               </p>
//             </li>
//             <li className="flex flex-col items-center text-center">
//               <h2 className="
//                 text-xl xl:text-4xl 2xl:text-5xl font-medium mb-2
//               ">
//                 Telegram / WhatsApp
//               </h2>
//               <p className="text-lg xl:text-2xl 2xl:text-4xl">
//                 <Link 
//                   href="tel:+375444818077" 
//                   className="text-blue-400 hover:underline"
//                 >
//                   +375 (44) 481-80-77
//                 </Link>
//               </p>
//             </li>
//             <li className="flex flex-col items-center text-center">
//               <h2 className="
//                 text-xl xl:text-4xl 2xl:text-5xl font-medium mb-2
//               ">
//                 Email
//               </h2>
//               <p className="text-lg xl:text-2xl 2xl:text-4xl">
//                 <Link 
//                   href="mailto:ginnymalko@gmail.com" 
//                   className="text-blue-400 hover:underline"
//                 >
//                   ginnymalko@gmail.com
//                 </Link>
//               </p>
//             </li>
//             <Link 
//               href="https://transparent-aspen-664.notion.site/Evgeny-Malko-CV-171bb48de254806c8161d8965c69fd96?pvs=74"
//               target="_blank"
//             >
//               <button className="
//                 flex items-center justify-center bg-[#FF6B00] 
//                 h-12 w-48 md:h-14 md:w-60 text-white font-semibold 
//                 py-2 px-4 rounded-lg hover:bg-[#FF8B00] 
//                 transition duration-300 mt-5
//               ">
//                 View CV
//               </button>
//             </Link>
//           </ul>
//         </div>
//       </main>
//       <div className='mb-1 xl:mb-0 pr-0 md:pr-40'>
//         <Photo />
//       </div>
//       <div className="
//         absolute -left-28 md:-left-40 bottom-8 rotate-12 
//         animate-pulse
//       ">
//         <Image
//           src="/assets/bulb.webp"
//           alt="bulb"
//           width={260}
//           height={260}
//           className="hidden sm:block w-52 h-52 lg:w-80 lg:h-80"
//         />
//       </div>
//     </div>
//   );
// };


import Image from 'next/image';
import Link from 'next/link';
import Photo from '@/components/Photo';

export default function Contacts() {
  return (
    <div className="relative min-h-screen bg-[#0C011A] text-white flex flex-col md:flex-row items-center">
      <main className="flex flex-col justify-center items-center w-full md:w-3/4 py-1 px-10 mt-[10vh] z-10">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl text-center mt-5 mb-3 md:mb-10 text-white font-semibold">
            Contacts
          </h1>
          <ul className="flex flex-col justify-center items-center space-y-1 md:space-y-6">
            <li className="flex flex-col items-center">
              <h2 className="text-xl xl:text-4xl 2xl:text-5xl font-medium mb-1">
                Location
              </h2>
              <p className="text-md xl:text-2xl 2xl:text-2xl">
                Minsk, Belarus
              </p>
            </li>
            <li className="flex flex-col items-center text-center">
              <h2 className="text-xl xl:text-4xl 2xl:text-5xl font-medium mb-2">
                Telegram / WhatsApp
              </h2>
              <p className="text-lg xl:text-2xl 2xl:text-4xl">
                <Link href="tel:+375444818077" className="text-blue-400 hover:underline">
                  +375 (44) 481-80-77
                </Link>
              </p>
            </li>
            <li className="flex flex-col items-center text-center">
              <h2 className="text-xl xl:text-4xl 2xl:text-5xl font-medium mb-2">
                Email
              </h2>
              <p className="text-lg xl:text-2xl 2xl:text-4xl">
                <Link href="mailto:ginnymalko@gmail.com" className="text-blue-400 hover:underline">
                  ginnymalko@gmail.com
                </Link>
              </p>
            </li>
            <Link href="https://transparent-aspen-664.notion.site/Evgeny-Malko-CV-171bb48de254806c8161d8965c69fd96?pvs=74" target="_blank">
              <button className="flex items-center justify-center bg-[#FF6B00] h-12 w-48 md:h-14 md:w-60 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#FF8B00] transition duration-300 mt-5">
                View CV
              </button>
            </Link>
          </ul>
        </div>
      </main>
      <div className="mb-1 xl:mb-0 pr-0 md:pr-40">
        <Photo />
      </div>
      <div className="absolute -left-28 md:-left-40 bottom-8 rotate-12 animate-pulse">
        <Image
          src="/assets/bulb.webp"
          alt="bulb"
          width={260}
          height={260}
          className="hidden sm:block w-52 h-52 lg:w-80 lg:h-80"
        />
      </div>
    </div>
  );
}
