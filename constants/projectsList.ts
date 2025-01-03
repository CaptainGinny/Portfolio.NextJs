import an_amazing_project from '@/public/assets/projects/anamazingproject.webp';
import an_amazing_project1 from '@/public/assets/projects/anamazingproject1.webp';
import an_amazing_project2 from '@/public/assets/projects/anamazingproject2.webp';

import reactPizza from '@/public/assets/projects/reactPizza.webp';
import reactPizza1 from '@/public/assets/projects/reactPizza1.webp';
import reactPizza2 from '@/public/assets/projects/reactPizza2.webp';

import headerSwiperSlider from '@/public/assets/projects/headerSwiperSlider.webp';
import headerSwiperSlider1 from '@/public/assets/projects/headerSwiper1.webp';
import headerSwiperSlider2 from '@/public/assets/projects/headerSwiper2.webp';

import colours from '@/public/assets/projects/colours.webp';
import colours1 from '@/public/assets/projects/projectColours1.webp';
import colours2 from '@/public/assets/projects/projectColours2.webp';

import earphoneStore from '@/public/assets/projects/earphoneStore.webp';
import earphoneStore1 from '@/public/assets/projects/earphoneStore1.webp';
import earphoneStore2 from '@/public/assets/projects/earphoneStore2.webp';

import jqueryProject from '@/public/assets/projects/jqueryProject.webp';
import jqueryProject1 from '@/public/assets/projects/jqueryProject1.webp';
import jqueryProject2 from '@/public/assets/projects/jqueryProject2.webp';

const projects = [
  {
    id: 0,
    title: 'An_Amazing_Project',
    description: 
      "An amazing Vite + React project featuring GSAP animations, scroll effects, and modern UI for a next-level interactive experience.",
    skills:
      'React.js, Vite, GSAP (GreenSock Animation Platform) — used for advanced animations and scroll-based interactions (via ScrollTrigger), SVG Filters, Tailwind CSS, PropTypes (optional), JavaScript ES6+',
    img: an_amazing_project,
    img1: an_amazing_project1,
    img2: an_amazing_project2,
    gitHubLink: 'https://captainginny.github.io/AnAmazingProject/',
  },
  {
    id: 1,
    title: 'React_Pizza',
    description:
      "Developed a highly optimized and responsive ReactJS 18 application " +
      "with TypeScript, featuring dynamic components, server interaction, " +
      "global state management with Redux Toolkit, and advanced search and " +
      "pagination using Lodash.Debounce and React Pagination. Leveraged modern " +
      "web development practices like lazy loading, code splitting, and tree " +
      "shaking, ensuring efficient performance and seamless user experience.",
    skills:
      'ReactJS 18, TypeScript, Redux Toolkit, React Router v6, Axios + Fetch, ' +
      'React Hooks, Prettier, CSS-Modules / SCSS, React Content Loader, React ' +
      'Pagination, Lodash.Debounce, Code Splitting, React Loadable',
      img: reactPizza,
      img1: reactPizza1,
      img2: reactPizza2,
      gitHubLink: 'https://captainginny.github.io/react-pizza.github.io/',
  },
  {
    id: 2,
    title: 'Header_swiper slider',
    description:
      "An immersive travel website showcasing destinations like Norway, " +
      "Austria, UAE, Thailand, and Morocco, featuring interactive slides and " +
      "dynamic navigation. Utilizes Swiper.js for carousel functionality and " +
      "modern CSS for styling, offering seamless user experience across " +
      "devices.",
    skills:
      'HTML, SCSS layout for creative website header on Gulp build, Swiper ' +
      'slider with parallax effect, Mobile adaptation, Preloader',
    img: headerSwiperSlider,
    img1: headerSwiperSlider1,
    img2: headerSwiperSlider2,
    gitHubLink: 'https://captainginny.github.io/HeaderSwiperSlider/',
  },
  {
    id: 3,
    title: 'Project_Colours',
    description:
      "A minimalist web app featuring interactive color locks powered by " +
      "Chroma.js, utilizing FontAwesome icons and Roboto font from Google " +
      "Fonts. Users can find and lock suitable colors, dynamically updating " +
      "the displayed HEX codes, enhancing user engagement and experience. " +
      "Ideal for quick color selection and sharing links.",
    skills: 'HTML, CSS, JavaScript',
    img: colours,
    img1: colours1,
    img2: colours2,
    gitHubLink: 'https://captainginny.github.io/Project-Coluors-github.io',
  },
  {
    id: 4,
    title: 'Earphone_Store',
    description:
      "This comprehensive e-commerce website features a user-friendly " +
      "interface with a product catalog prominently displayed on the homepage. " +
      "Built using HTML, SCSS, and JS within a Gulp build system, it offers " +
      "robust functionality and seamless automation. Designed with full " +
      "responsiveness in mind, it ensures an optimal viewing experience across " +
      "all devices, showcasing modern web development expertise and effective " +
      "design practices.",
    skills: 'HTML, SCSS, Responsive Web Design, JavaScript, Gulp, Webpack',
    img: earphoneStore,
    img1: earphoneStore1,
    img2: earphoneStore2,
    gitHubLink: 'https://captainginny.github.io/Earphone_Store/',
  },
  {
    id: 5,
    title: 'jQuery_project',
    description:
      "Utilizing jQuery for dynamic DOM manipulation, this project showcases " +
      "a sleek car configurator with options for engine power, brake systems, " +
      "optional packages, and color selection, ensuring an interactive user " +
      "experience.",
    skills: 'jQuery, HTML, CSS, JavaScript, DOM manipulation',
    img: jqueryProject,
    img1: jqueryProject1,
    img2: jqueryProject2,
    gitHubLink: 'https://captainginny.github.io/jQuery-project.github.io/',
  },
];

export { projects };