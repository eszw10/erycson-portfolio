import { localizations } from "../localization/localizations";

export const projects = [
  {
    id: "c8092ac2-5fa4-4872-b80c-cdf5fff6d2ea",
    title: "My Portfolio",
    image: "/images/myPortfolio.png",
    desc: "Welcome to my web portfolio! This site is my personal space to showcase the projects I'm passionate about, the technologies I've explored and learned, how you can get in touch, and a little bit about me. It's a hands-on demonstration of my skills and understanding within my growing tech stack. ",
    info: "Crafted with React and react-router-dom for easy browsing, the site's styling is powered by Tailwind CSS. To enhance the visual appeal and user interaction, I've integrated react-icons, react-hot-toast for contact notifications, and react-type-animation for dynamic text. The contact form is seamlessly handled by Web3Forms.",
    gitLink: "https://github.com/eszw10/erycson-portfolio",
    demo: "https://erycson-portfolio.vercel.app/",
    codeShown: true,
    demoShown: true,
    techStacks: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "8338e19d-de38-40de-aac0-c32f4e0c9e41",
    title: "Santuary-app",
    image: "/images/sanctApp.png",
    desc: "Looking for a peaceful escape? Need time to heal in nature? Sanctuary is the web app I created to help you discover and reserve cozy cabins surrounded by the beauty of the natural world.",
    info: "Built with Next.js and its modern App Router for smooth navigation, Sanctuary's styling comes to life with Tailwind CSS. User authorization is handled securely with Auth.js, and the intuitive booking and reservation feature is powered by React Day Picker. Creating Sanctuary was an incredible learning experience, allowing me to dive deep into exciting Next.js concepts like React Server Components, Server Components, Client Components, Static Site Generation (SSG), Server-Side Rendering (SSR), understanding the server/client component boundary, exploring server actions for data mutations, and mastering Next.js's new hooks and middleware. It was a challenging and rewarding journey!",
    gitLink: "https://github.com/eszw10/sanctuary-app",
    demo: "https://sanctuary-app-sandy.vercel.app/",
    codeShown: true,
    demoShown: true,
    techStacks: ["Next JS", "Tailwind CSS", "Auth JS", "Supabase"],
  },
  {
    id: "2d1b5d4b-bd2a-49d4-a4ef-1ea3b2f936f9",
    title: "Santuary-admin",
    image: "/images/sanctAdmin.png",
    desc: "Behind the scenes of Sanctuary, there's Sanctuary Admin – an application I created to empower employees with comprehensive tools for managing reservations and cabin information. From smooth guest check-ins and check-outs to confirming booking statuses and configuring cabin details, this app centralizes key operational tasks. It also provides functionalities for calculating sales and accessing crucial Sanctuary statistics.",
    info: "Built with React and react-router-dom for intuitive navigation, the styling is powered by styled-components. A key learning aspect of this project was mastering efficient data handling using React Query. Its built-in caching significantly speeds up data fetching. Furthermore, by connecting with the Supabase database via its APIs, I implemented features like filtering and pagination, gaining practical experience in robust front-end and back-end interaction.",
    gitLink: "https://github.com/eszw10/sanctuary-admin",
    demo: "https://sanctuary-admin-ebon.vercel.app/",
    codeShown: true,
    demoShown: true,
    techStacks: ["React", "styled-components", "React Query", "Supabase"],
  },
  {
    id: "2dea0724-65a2-440b-b679-6dbbe1030ab1",
    title: "Pizza Dash",
    image: "/images/pizzaDash.png",
    desc: "Need a pizza, pronto? Pizza Dash is here (virtually)! This app provides a seamless experience for browsing pizza options, adding them to your cart, and placing an order. After ordering, you'll get a comprehensive order note including a unique ID and estimated delivery time. For those extra urgent cravings, there's even an option to prioritize your order. You can easily track your order's journey at any time using the convenient search by ID feature. ",
    info: "Developed using React and react-router-dom for intuitive routing, this project allowed me to dive deep into React Router's loader and action functionalities. By utilizing its \"render as you fetch\" approach, I focused on achieving faster and more efficient data fetching. The application's state is effectively managed using Redux.",
    gitLink: "https://github.com/eszw10/pizza-dash",
    demo: "https://pizza-dash-black.vercel.app/",
    codeShown: true,
    demoShown: true,
    techStacks: ["React", "Redux", "Tailwind CSS"],
  },
  {
    id: "c40c4fb7-5122-4192-b5dd-7ca1a6e2b57c",
    title: "Geo Note",
    image: "/images/geoNote.png",
    desc: "Ever wanted a cool way to remember all the awesome places you've been? GeoNote is the app I built for that! It lets you drop pins on a world map for every spot you've explored and jot down your thoughts and memories. Think of it as your personal travelogue, showing off all your adventures to friends.",
    info: "Under the hood, it's powered by React, with smooth navigation thanks to react-router-dom, and a slick interactive map using react-leaflet. This project was also a fun way for me to really dive into some cool React features like the useSearchParams hook and managing data across the whole app with React's Context API.",
    gitLink: "https://github.com/eszw10/geoNote",
    demo: "https://geo-note.vercel.app/",
    codeShown: true,
    demoShown: true,
    techStacks: ["React", "React Router"],
  },
  {
    id: "cd3666ee-4964-49d8-a11f-831dc6569bfc",
    title: "React Quiz",
    image: "/images/react-quiz.png",
    desc: "The React Quiz project is a simple and engaging quiz app built using React, leveraging the power of the useReducer hook for efficient state management. The application allows users to take a quiz, answer multiple-choice questions, and see their results at the end.",
    gitLink: "https://github.com/eszw10/react-quiz",
    demo: "https://react-quiz-six-rho.vercel.app/",
    codeShown: true,
    demoShown: true,
    techStacks: ["React"],
  },
  {
    id: "1ecbe5b7-8772-48eb-a941-8b9bda516bb6",
    title: "Tenzies",
    image: "/images/tenzies.png",
    desc: "Tenzies is a simple game where user have to roll the dice until all dice has the same value, the time user take and the best time to complete the game will be stored and updated inside local storage",
    gitLink: "https://github.com/eszw10/tenzies",
    demo: "https://tenzies-e3ykhw2w5-erycsonzw.vercel.app/",
    codeShown: true,
    demoShown: true,
    techStacks: ["React"],
  },
  {
    id: "e1637ba2-8c2e-476f-b092-536f5ff5806b",
    title: "Vakantiewoningen",
    image: "/images/vakanti.png",
    desc: "Vakantiewoningen is a premier vacation rental platform with diverse properties worldwide.",
    gitLink: "https://github.com/eszw10/vakantiewoningen",
    demo: "https://vakanti.netlify.app/src/",
    codeShown: false,
    demoShown: true,
    techStacks: ["HTML", "Javascript", "Tailwind CSS"],
  },
  {
    id: "f9cf7a23-a3df-4edf-8480-91af4dd719ac",
    title: "TextFort",
    image: "/images/textfort.png",
    desc: "TextFort is a website created for facilitate text encryption and decryption using Advanced Encryption Standard (AES) and Columnar Transposition algorithms.",
    gitLink: "https://github.com/eszw10/textFort",
    demo: "https://text-fort.vercel.app/",
    codeShown: true,
    demoShown: true,
    techStacks: ["React", "Tailwind CSS"],
  },
  {
    id: "f928cdbb-5179-4bba-be50-7e011987fe8f",
    title: "IdentifEye",
    image: "/images/identifeye.png",
    desc: "Identifeye is a facial recognition website that implement machine learning model trough API. (*Demo cant be shown because the API server is no longer exist)",
    gitLink: "https://github.com/eszw10/identifEye",
    demo: "https://identifeye-flrc61jrh-eszw10.vercel.app/",
    codeShown: true,
    demoShown: false,
    techStacks: ["React", "Tailwind CSS"],
  },
  {
    id: "348a5f12-00f9-48bf-8b6b-5f9d40763e2d",
    title: "Bang RJ Store",
    image: "/images/rjStore.png",
    desc: "Bang RJ Store is a service provider specializing in game top-ups, offeirng seamless transactions for various gaming platforms. Known for enhancing user experiences and facilitating convenient in-game credit purchases",
    gitLink: "https://github.com/eszw10/identifEye",
    demo: "https://identifeye-flrc61jrh-eszw10.vercel.app/",
    codeShown: true,
    demoShown: false,
    techStacks: ["React", "Tailwind CSS"],
  },
  {
    id: "9059c5e6-b5d9-4eeb-96c4-b199eeaf57e0",
    title: "Boedaya",
    image: "/images/boedaya.png",
    desc: "Boedaya is a website that facilitates users in finding information, services, culinary options, and tourist destinations across all regions of Indonesia.",
    gitLink: "https://github.com/eszw10/boedaya-project",
    demo: "https://eszw10.github.io/boedaya-project/",
    codeShown: true,
    demoShown: true,
    techStacks: ["HTML", "CSS", "Javascript"],
  },
  {
    id: "d3413ce2-7c54-4cc0-adcd-f6d60f0bc8c0",
    title: "Calculator App",
    image: "/images/calculator.png",
    desc: "Explore my versatile simple calculator app project, designed to streamline everyday calculations with a clean and intuitive interface.",
    gitLink: "https://github.com/eszw10/Calculator",
    demo: "https://eszw10.github.io/Calculator/",
    codeShown: true,
    demoShown: true,
    techStacks: ["HTML", "CSS", "Javascript"],
  },
  {
    id: "ab7c5ca5-a615-4f34-ab6a-f5644734b321",
    title: "Tictactoe",
    image: "/images/tictactoe.png",
    desc: "Simple and user friendly TicTacToe game with a clean design, Experience classic fun with a modern touch, highlighting my focus on creating easy and enjoyable digital projects.",
    gitLink: "https://github.com/eszw10/Tictactoe",
    demo: "https://eszw10.github.io/Tictactoe/",
    codeShown: true,
    demoShown: true,
    techStacks: ["HTML", "CSS", "Javascript"],
  },
];

const { nav, footer } = localizations;

export const footerNavigations = [
  {
    title: "Navigation",
    links: [
      {
        label: nav.home,
        link: "/",
      },
      {
        label: nav.about,
        link: "/about",
      },
      {
        label: nav.projects,
        link: "/projects",
      },
      {
        label: nav.contacts,
        link: "/contacts",
      },
    ],
  },
  {
    title: nav.contacts,
    links: [
      {
        label: footer.contacts.email,
        link: "mailto:erycszw10@gmail.com",
      },
      {
        label: footer.contacts.linkedIn,
        link: "https://www.linkedin.com/in/erycson-zulkarnain-wijaya/",
      },
    ],
  },
];
