import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dskillboy from "../assets/dskillboy.png";
const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const points = [
    "🚀 Passionate about crafting exceptional web experiences.",
    "💻 Proficient in MERN stack, C++, HTML, CSS, and JavaScript.",
    "🌐 Building modern, scalable, and secure web applications.",
    "🎨 Familiar with the latest web dev technologies and best practices working with headless CMS",
  ];

  return (
    <div className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white py-16">
      <div className="max-w-screen-md p-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 mb-8">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  className="text-lg"
                  style={{ lineHeight: "1.8" }}
                >
                  {point}
                </motion.div>
              ))}
            </div>

            <div className="hidden md:block">
              
              <img
                src={dskillboy}
                alt="Your Alt Text"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
