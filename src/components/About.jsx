import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const points = [
    "⏹️ Proficient in MERN stack development, C++, C, HTML, CSS, JavaScript, Firebase, and data structures and algorithms (DSA) with object-oriented programming (OOPs) concepts.",
    "⏹️ Able to build modern and dynamic web applications while maintaining security and scalability.",
    "⏹️ Skilled in managing software projects efficiently and collaborating with other developers effectively using Git.",
    "⏹️ Familiar with the latest web development technologies  and best practices working with headless CMS.",
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust the threshold for when the animation should trigger
  });

  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        ref={ref}
        className="max-w-screen-sm p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {points.map((point, index) => (
          <motion.div
            key={index}
            className="text-xl mt-5 md:mt-8 mb-4"
            style={{ lineHeight: "1.8", fontSize: "18px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            {point}
          </motion.div>
        ))}

        <br />
      </div>
      <style jsx>{`
        @media (max-width: 750px) {
          /* Add your responsive styles here */
          .text-xl {
            font-size: 16px; /* For example, you can decrease the font size for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default About;
