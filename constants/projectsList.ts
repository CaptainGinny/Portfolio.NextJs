import loftHouse from '@/public/assets/projects/loftHouse.jpeg';
import loftHouseOrig1 from '@/public/assets/projects/loftHouse1.png';
import loftHouseOrig2 from '@/public/assets/projects/loftHouse2.png';

import relvise from '@/public/assets/projects/relvise.jpeg';
import relvise0rig1 from '@/public/assets/projects/projectLoyouttraining1.png';
import relvise0rig2 from '@/public/assets/projects/projectLoyouttraining2.png';

import guestList from '@/public/assets/projects/guestList.jpeg';
import guestListOrig1 from '@/public/assets/projects/projectUsers1.png';
import guestListOrig2 from '@/public/assets/projects/projectUsers2.png';

import jqueryProject from '@/public/assets/projects/jqueryProject.jpeg';
import jqueryProjectOrig1 from '@/public/assets/projects/jqueryProject1.png';
import jqueryProjectOrig2 from '@/public/assets/projects/jqueryProject2.png';

import calculator from '@/public/assets/projects/calculator.jpeg';
import calculatorOrig1 from '@/public/assets/projects/loanCalculator1.png';
import calculatorOrig2 from '@/public/assets/projects/loanCalculator2.png';

import headerSwiperSlider from '@/public/assets/projects/headerSwiperSlider.jpeg';
import headerSwiperSliderOrig1 from '@/public/assets/projects/headerSwiper1.png';
import headerSwiperSliderOrig2 from '@/public/assets/projects/headerSwiper2.png';

import colours from '@/public/assets/projects/colours.jpeg';
import coloursOrig1 from '@/public/assets/projects/projectColours1.png';
import coloursOrig2 from '@/public/assets/projects/projectColours2.png';

import photoSearch from '@/public/assets/projects/photoSearch.jpeg';
import photoSearchOrig1 from '@/public/assets/projects/reactprojectPhotos1.png';
import photoSearchOrig2 from '@/public/assets/projects/reactprojectPhotos2.png';

import earphoneStore from '@/public/assets/projects/earphoneStore.jpeg';
import earphoneStoreOrig1 from '@/public/assets/projects/earphoneStore1.png';
import earphoneStoreOrig2 from '@/public/assets/projects/earphoneStore2.png';

import reactPizza from '@/public/assets/projects/reactPizza.jpeg';
import reactPizzaOrig1 from '@/public/assets/projects/reactPizza1.png';
import reactPizzaOrig2 from '@/public/assets/projects/reactPizza2.png';

const projects = [
  {
    id: 0,
    title: 'Loft_House',
    description: 
      "Utilizing HTML5, CSS3, and JavaScript, this project embodies sleek " +
      "design and seamless user experience, highlighting the essence of " +
      "contemporary living spaces.",
    skills:
      'Figma, CSS preprocessor SCSS, Use mixins and variables, Adaptive ' +
      'layout, Layout based on CSS Grid and Flexbox, JS',
    img: loftHouse,
    img1: loftHouseOrig1,
    img2: loftHouseOrig2,
    gitHubLink: 'https://captainginny.github.io/Loft-House/',
  },
  {
    id: 1,
    title: 'Project_layout training',
    description:
      "This project showcases modern HTML5, CSS3, and JavaScript techniques " +
      "to create a sleek and responsive website, emphasizing financial and " +
      "environmental consultancy services with engaging visuals and seamless " +
      "navigation.",
    skills: 'HTML, CSS, Responsive Web Design',
    img: relvise,
    img1: relvise0rig1,
    img2: relvise0rig2,
    gitHubLink: 'https://captainginny.github.io/Project-layout-training.github.io',
  },
  {
    id: 2,
    title: 'React-project-Users',
    description:
      "This project leverages React.js with create-react-app, showcasing " +
      "dynamic UI components and efficient state management, utilizing CSS " +
      "for styling and JavaScript for interactivity, ensuring a responsive " +
      "user experience across devices.",
    skills:
      'Working with useEffect hook, Sending a request to the backend using ' +
      'fetch and rendering this data, Skeleton using the react-content-loader ' +
      'library, Searching for users, User list renderer, Spread-operator, ' +
      'Adding/removing users from the invitation array, Displaying information ' +
      'about content download',
    img: guestList,
    img1: guestListOrig1,
    img2: guestListOrig2,
    gitHubLink: 'https://captainginny.github.io/React-project-Users/',
  },
  {
    id: 3,
    title: 'jQuery_project',
    description:
      "Utilizing jQuery for dynamic DOM manipulation, this project showcases " +
      "a sleek car configurator with options for engine power, brake systems, " +
      "optional packages, and color selection, ensuring an interactive user " +
      "experience.",
    skills: 'jQuery, HTML, CSS, JavaScript, DOM manipulation',
    img: jqueryProject,
    img1: jqueryProjectOrig1,
    img2: jqueryProjectOrig2,
    gitHubLink: 'https://captainginny.github.io/jQuery-project.github.io/',
  },
  {
    id: 4,
    title: 'Loan_Calculator',
    description:
      "This interactive web application, powered by JavaScript, computes " +
      "loan repayment details based on user inputs for loan amount, annual " +
      "interest rate, and repayment period. It features dynamic updates using " +
      "DOM manipulation and showcases loan options based on user location.",
    skills: 'JavaScript, HTML',
    img: calculator,
    img1: calculatorOrig1,
    img2: calculatorOrig2,
    gitHubLink: 'https://captainginny.github.io/Loan-Calculator/',
  },
  {
    id: 5,
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
    img1: headerSwiperSliderOrig1,
    img2: headerSwiperSliderOrig2,
    gitHubLink: 'https://captainginny.github.io/HeaderSwiperSlider/',
  },
  {
    id: 6,
    title: 'Project_Colours',
    description:
      "A minimalist web app featuring interactive color locks powered by " +
      "Chroma.js, utilizing FontAwesome icons and Roboto font from Google " +
      "Fonts. Users can find and lock suitable colors, dynamically updating " +
      "the displayed HEX codes, enhancing user engagement and experience. " +
      "Ideal for quick color selection and sharing links.",
    skills: 'HTML, CSS, JavaScript',
    img: colours,
    img1: coloursOrig1,
    img2: coloursOrig2,
    gitHubLink: 'https://captainginny.github.io/Project-Coluors-github.io',
  },
  {
    id: 7,
    title: 'React-project-Photos',
    description:
      "React web application. Utilizing create-react-app, this project " +
      "integrates cutting-edge technologies including React components, JSX " +
      "syntax, and CSS modules for responsive design, ensuring optimal " +
      "performance and user interaction.",
    skills: 'ReactJS, JavaScript, CSS Modules',
    img: photoSearch,
    img1: photoSearchOrig1,
    img2: photoSearchOrig2,
    gitHubLink: 'https://captainginny.github.io/React-project-Photos/',
  },
  {
    id: 8,
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
    img1: earphoneStoreOrig1,
    img2: earphoneStoreOrig2,
    gitHubLink: 'https://captainginny.github.io/Earphone_Store/',
  },
  {
    id: 9,
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
      img1: reactPizzaOrig1,
      img2: reactPizzaOrig2,
      gitHubLink: 'https://captainginny.github.io/react-pizza.github.io/',
  }
];

export { projects };