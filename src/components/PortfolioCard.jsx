import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';

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
      className="bg-gray-800 rounded-lg shadow-md p-4 overflow-hidden transform transition duration-300 hover:scale-105"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.4 }}
    >
      <div className="relative aspect-ratio-16/9">
        <img
          src={src}
          alt=""
          className="absolute inset-0 object-cover rounded-md"
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-center space-x-2">
          {technologies.map((tech) => (
            <div key={tech} className="text-blue-500 text-lg">
              {tech === 'React' && <FaReact />}
              {tech === 'Node.js' && <FaNodeJs />}
              {tech === 'HTML' && <FaHtml5 />}
              {tech === 'CSS' && <FaCss3 />}
              {/* Add more icons for other technologies */}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
          >
            Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
          >
            Code
          </a>
        </div>
        <p className="text-lg font-semibold text-center mt-4">{projectName}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
