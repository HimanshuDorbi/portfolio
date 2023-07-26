import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen md:h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-sm p-4 mx-auto flex flex-col justify-center w-full h-full md:h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="text-xl mt-10 md:mt-10 mb-4" style={{ lineHeight: "2" }}>
          ⏹️ Proficient in MERN stack development, C++, C, HTML, CSS, JavaScript, Firebase, and data structures and algorithms (DSA) with object-oriented programming (OOPs) concepts.
        </div>
        <div className="text-xl mb-4" style={{ lineHeight: "2" }}>
          ⏹️ Able to build modern and dynamic web applications while maintaining security and scalability.
        </div>
        <div className="text-xl mb-4" style={{ lineHeight: "2" }}>
          ⏹️ Skilled in managing software projects efficiently and collaborating with other developers effectively using Git.
        </div>
        <div className="text-xl mb-4" style={{ lineHeight: "2" }}>
          ⏹️ Familiar with the latest web development technologies and best practices.
        </div>

        <br />
      </div>
    </div>
  );
};

export default About;
 