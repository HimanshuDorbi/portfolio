import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaDatabase } from 'react-icons/fa';
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.jpeg";
import navbar from "../assets/portfolio/navbar.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import reactSmooth from "../assets/portfolio/reactSmooth.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const PortfolioCard = ({ id, src, demoLink, codeLink, technologies, projectName }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: inView ? 1 : 0,
      scale: inView ? 1 : 0.8,
    },
  };

  return (
    <motion.div
      ref={ref}
      key={id}
      className="relative rounded-xl overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #4f46e5, #be55df)",
      }}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.4 }}
    >
      <img
        src={src}
        alt=""
        className="w-full h-48 object-cover object-center duration-200 hover:scale-105"
      />
      <div className="p-4 text-white bg-opacity-70 backdrop-blur-md">
        <p className="flex items-center space-x-2">
          {technologies.map((tech) => (
            <span key={tech} className="text-lg">
              {tech === 'React' && <FaReact />}
              {tech === 'Node.js' && <FaNodeJs />}
              {tech === 'HTML' && <FaHtml5 />}
              {tech === 'CSS' && <FaCss3 />}
              {tech === 'Javascript' && <FaJs />}
              {tech === 'database' && <FaDatabase />}
              {/* Add more icons for other technologies */}
            </span>
          ))}
        </p>
        <div className="flex justify-between mt-2">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className=" border-purple-900 border t-5 px-4 py-2 bg-white text-black rounded-lg transition duration-200 hover:scale-105">
              Demo
            </button>
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-black text-white rounded-lg transition duration-200 hover:scale-105">
              Code
            </button>
          </a>
        </div>
        <p className="text-lg font-semibold mt-2">{projectName}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const portfolios = [
    {
      id: 1,
      src: reactParallax,
      demoLink: "https://example.com/demo2",
      codeLink: "https://github.com/HimanshuDorbi/ecommerce-app",
      technologies: ['React','HTML', 'CSS', 'Javascript', 'Node.js','database'],
      projectName: 'Fullstack Ecommerce App',
    },
    {
      id: 2,
      src: installNode,
      demoLink: "",
      codeLink: "https://github.com/HimanshuDorbi?tab=repositories",
      technologies: ['React','HTML', 'CSS', 'Javascript', 'Node.js','database'],
      projectName: 'House Rental Application',

    },
    {
      id: 3,
      src: navbar,
      demoLink: "https://bubblebybabu.netlify.app/",
      codeLink: "https://github.com/HimanshuDorbi?tab=repositories",
      technologies: ['React', 'HTML', 'CSS','Javascript'],
      projectName: 'Sorting Visualizer',
    },
    {
      id: 4,
      src: reactSmooth,
      demoLink: "https://dorbi-chat-app.netlify.app",
      codeLink: "https://github.com/HimanshuDorbi?tab=repositories",
      technologies: ['HTML', 'CSS','Javascript','React','database'],
      projectName: 'Realtime Chat Application',
    },
    {
      id: 5,
    
      src: arrayDestruct,
      demoLink: "https://edit-by-dorbi.netlify.app/",
      codeLink: "https://github.com/HimanshuDorbi/Image-editor",
      technologies: ['React','HTML', 'CSS', 'Javascript' ],
      projectName: 'Image Editor App',
     
    },
    {
      id: 6,
      src: reactWeather,
      demoLink: "https://getmausam.netlify.app/",
      codeLink: "https://github.com/HimanshuDorbi?tab=repositories",
      technologies: ['HTML', 'CSS','Javascript','React'],
      projectName: 'SkyWatch App',
    },
  ];

  return (
    <div
      ref={ref}
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2}}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-12">
          {portfolios.map(({ id, src, demoLink, codeLink, technologies, projectName }) => (
            <PortfolioCard
              key={id}
              id={id}
              src={src}
              demoLink={demoLink}
              codeLink={codeLink}
              technologies={technologies}
              projectName={projectName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
