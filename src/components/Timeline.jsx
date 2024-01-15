import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaLaptopCode, FaCode, FaTrophy, FaSearch, FaCertificate } from "react-icons/fa"; // Import icons

const TimelineComponent = () => {
  const timelineData = [
    {
      date: "2020",
      title: "Schooling Education",
      description: "Embarked on my educational journey at St. Joseph Convent School",
      icon: <FaGraduationCap />,
      color: "#FF5C58", // Coral
      textColor: "#EEE", // Light gray
    },
    {
      date: "2025",
      title: "Unleashing the Tech Enthusiast",
      description: "Venturing into a Bachelors in Computer Science and Engineering with passion from Graphic Era University",
      icon: <FaLaptopCode />,
      color: "#62A4E8", // Sky Blue
      textColor: "#EEE", // Light gray
    },
    {
      date: "2022",
      title: "Coding Odyssey",
      description: "Mastering the art of programming in various languages including C, C++, Java, Javascript, ReactJS, NodeJS, MongoDB",
      icon: <FaCode />,
      color: "#78C672", // Lime Green
      textColor: "#EEE", // Light gray
    },
    {
      date: "2023",
      title: "Conquering the Hackathon Realm",
      description: "Securing victories in Hacktoberfest, and earning recognition from state ministry and University",
      icon: <FaTrophy />,
      color: "#3D7FA6", // Steel Blue
      textColor: "#EEE", // Light gray
    },
    {
      date: "2023",
      title: "Exploring the Frontier of Research",
      description: "Publishing a research paper on esteemed international journal on comparison based study of Kanade Lucas Tomasi and Eigenfaces",
      icon: <FaSearch />,
      color: "#F9AA7D", // Peach
      textColor: "#EEE", // Light gray
    },
    {
      date: "2023",
      title: "Web Development and Technologies",
      description: "Earning a Certificate in MERN STACK Web Development from LinkedIn Learning",
      icon: <FaCertificate />,
      color: "#A978C4", // Lavender
      textColor: "#EEE", // Light gray
    },
    // Add more timeline items
  ];

  return (
    <div id="timeline" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Timeline
          </p>
          <p className="py-4">Here are some of my notable events</p>
        </div>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              dateClassName="text-white"
              iconStyle={{ background: item.color, color: "#EEE", borderRadius: "50%" }}
              icon={item.icon}
              contentStyle={{ background: item.color, color: item.textColor, borderRadius: "10px" }}
              contentArrowStyle={{ borderRight: `7px solid ${item.color}` }}
            >
              <h3 className="vertical-timeline-title font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimelineComponent;
