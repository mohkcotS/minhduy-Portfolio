import { webImg, pdmImg, oopImg, pplImg, dsaImg, cgImg, ooadImg } from "./imageData";

export const experiences = [
  {
    title: "Frontend Developer",
    year: "Jul 2025 - Sep 2025",
    description:
      "Working at ZenS Joint Stock Company as a Frontend Developer,I participated in two real-world projects, developed userinterfaces using React and Tailwind CSS, integrated APIs,optimized performance, and worked in an Agile environment,improving both my coding and teamwork skills.",
  },
];

export const educations = [
  {
    title: "B.S. in Computer Science",
    year: "Sep 2022 - Present",
    description:
      "Journey to be a full stack developer at International University with some relavant technical course such as DSA, PDM, Web Application,...",
  },
];

export const projects = [
  {
    name: "Holy Fish Game",
    description: `The 2D Java game is the final project for the Object-Oriented Programming course, inspired by Happy Farm. 
    In this game, player control a character who fishes, collects items, and sells or trades them to earn money, upgrade tools, 
    and progress through the game.`,

    type: "Game Application",
    technique: ["Java"],
    link: "https://github.com/mohkcotS/Project_OOP_FishingGame",
    images: oopImg,
  },
  {
    name: "Battle Ship Game",
    description: `This is my first individual project for the final project evaluation of the Data Structures and Algorithms course. 
    The project is a simple game that applies core DSA concepts such as data organization, searching, and basic algorithms to manage game 
    states and player interactions, demonstrating practical application of theoretical knowledge.`,
    type: "Game Application",
    technique: ["Java"],
    link: "https://github.com/mohkcotS/Project_DSA_Battleship",
    images: dsaImg,
  },
  {
    name: "Library Management System",
    description: `A system that enables librarians to easily add, edit, and delete book records, manage book information efficiently, 
    track updates accurately, and maintain an organized digital catalog that supports daily library operations and improves overall data 
    management.`,
    type: "Web Application",
    technique: ["React","TypeScript","Tailwind CSS","Java","Springboot","PostgreSQL","RESTful API"],
    link: "https://github.com/mohkcotS/Project_DSA_Battleship",
    images: pdmImg,
  },
  {
    name: "Restaurant Management System",
    description: `A Restaurant Management System that streamlines the ordering,kitchen processing, and payment workflow designed 
                to support daily restaurant operations efficiently.`,
    type: "Web Application",
    technique: ["React","JavaScript","Tailwind CSS","Node.js","Express.js","MySQL","RESTful API","JWT","WebSocket"],
    link: "https://github.com/mohkcotS/Project_WEB_RestaurantManagementSystem",
    images: webImg,
  },
  {
    name: "Online Clothes Shop",
    description: `This project focuses on designing the UI for an online clothing shop as part of the OOAD course. 
    The system includes a size recommendation feature that suggests suitable clothing sizes based on user information such as height, 
    weight, and gender, aiming to enhance user experience and support better purchasing decisions.`,
    type: "Web Application",
    technique: ["React","JavaScript","Tailwind CSS"],
    link: "https://github.com/mohkcotS/Project_OOAD_OnlineClothesShop",
    images: ooadImg,
  },
  {
    name: "Pew Pew",
    description: `Our Typing Shooter Game leverages ANTLR to recognize valid syntax as players type commands to control their spaceship. 
    Each correct input fires weapons or maneuvers the ship, while errors slow progress. The parser provides real-time feedback, turning 
    coding accuracy into gameplay strategy, blending programming skills with fast-paced action.`,
    type: "Game Application",
    technique: ["Python","Antlr"],
    link: "https://github.com/mohkcotS/Project_PPL_PewPew",
    images: pplImg,
  },
  {
    name: "Doan Mon Gate Simulation",
    description: `This Doan Mon Gate simulation uses Python with PyOpenGL and Py3D libraries to model and render the historic structure 
    in 3D. Users can navigate the scene with camera controls, observe pre-programmed visitor paths, and experience realistic lighting and 
    shading effects, providing an interactive visualization of the gate’s architecture and environment.`,
    type: "Graphics Simulation",
    technique: ["Python","py3d","pyOpenGL"],
    link: "https://github.com/mohkcotS/Project_CG_DoanMonGateSimulation",
    images: cgImg,
  },
];
