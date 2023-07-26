import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ResumePDF from "../assets/resume.pdf"; // Replace this with the path to your resume PDF file

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Himanshu Dorbi
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love to work on web applications using technologies like
            MERN stack, C++, Java.
          </p>

          <div className="flex flex-col md:flex-row items-center">
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
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className=" -z-0 p-4 mx-auto mt-10 md:mt-0 md:w-2.5/3.5 md:p-8 md:ml-8 rounded-lg overflow-hidden shadow-lg relative" style={{ top: "-2rem" }}>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-lg mx-auto w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;