import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ResumePDF from "../assets/resume.pdf";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const handleResumeButtonClick = () => {
    toast.success('Downloading resume...'); // Display a success notification
    // Here, you can add code to trigger the actual resume download, if required.
  };

  return (
    <motion.div // Wrap the entire component with motion.div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <motion.h2
            className="text-4xl sm:text-7xl font-bold text-white mt-8 md:mt-0 md:mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            I'm Himanshu Dorbi
          </motion.h2>
          <motion.p
            className="text-gray-500 py-4 max-w-md"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            I love to work on web applications using technologies like MERN
            stack, C++, Java.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>

            <a
              href={ResumePDF}
              download="Himanshu_Dorbi_Resume.pdf"
              className="text-white w-fit px-6 py-3 my-2 md:ml-4 flex items-center rounded-md border-2 border-cyan-500 cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all"
              onClick={handleResumeButtonClick} // Add the onClick event handler here
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="-z-0 p-4 mx-auto mt-10 md:mt-0 md:w-2.5/3.5 md:p-8 md:ml-8 rounded-lg overflow-hidden shadow-lg relative"
          style={{ top: "-2rem" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src={HeroImage}
            alt="my profile"
            className="rounded-lg mx-auto w-full h-full object-cover"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
