import About from "./components/About";
import Contact from "./components/Contact";
import React, { useState,useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow-up icon from react-icons

import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Blog from "./components/Blog";
import Preloader from "./components/Preloader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 import Timeline  from "./components/Timeline";



function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Preloader/>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <Timeline />
    </div>
     
      
      <Portfolio />
      <Blog/>

      <ToastContainer />
      {/* <LeetCodeStreak/> */}
      <Contact />

      <SocialLinks />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;

