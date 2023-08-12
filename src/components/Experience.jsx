import React, { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";

const Experience = () => {
  const techs = useMemo(
    () => [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: reactImage,
        title: "React",
        style: "shadow-blue-600",
      },
      {
        id: 5,
        src: nodejs,
        title: "Node JS",
        style: "shadow-green-400",
      },
      {
        id: 6,
        src: graphql,
        title: "Scss",
        style: "shadow-pink-400",
      },
      {
        id: 7,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
      {
        id: 8,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
      },
      // Techs array content here
    ],
    []
  );

  const controls = useAnimation();

  // Detect when the component comes into view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      // When the component comes into view, trigger the animations
      techs.forEach(({ id }) => {
        controls.start((i) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, delay: i * 0.4 },
        }));
      });
    }
  }, [inView, techs, controls]);

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div
        ref={ref} // Attach the intersection observer to this div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
      >
        <div>
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 text-center py-4 px-2 sm:px-8">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              initial={{ opacity: 0, y: 20 }}
              animate={controls} // Use the controls from framer motion to animate
              custom={id} // Use the 'id' as custom data to distinguish each tech card
            >
              <img src={src} alt={title} className="w-12 md:w-20 mx-auto" />
              <p className="mt-2 text-sm md:text-base">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
