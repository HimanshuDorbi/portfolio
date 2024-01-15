import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Preloader from "./components/Preloader";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timeline from "./components/Timeline";
import "./index.css";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [cursorActive, setCursorActive] = useState(false);
  const [dropPosition, setDropPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const addRipple = (e) => {
    const rippleContainer = e.currentTarget.getBoundingClientRect();
    const rippleSize = Math.max(rippleContainer.width, rippleContainer.height);
    const x = e.clientX - rippleContainer.left - rippleSize / 2;
    const y = e.clientY - rippleContainer.top - rippleSize / 2;

    const newRipple = {
      x,
      y,
      size: rippleSize,
    };

    setRipples([...ripples, newRipple]);
  };

  const toggleCursor = () => {
    setCursorActive(!cursorActive);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const updateDropPosition = (e) => {
    setDropPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", updateDropPosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", updateDropPosition);
    };
  }, []);

  return (
    <div>
      <Preloader />
      <NavBar />
      <Home />
      <About />
      <Experience />
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <Timeline />
      </div>
      <Portfolio />
      <Blog />
      <ToastContainer />

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

      {/* Custom cursor */}
      <div
        className={`custom-cursor ${cursorActive ? 'active' : ''}`}
        onClick={toggleCursor}
      ></div>

      {/* Water ripple effect */}
      <div
        className="ripple-container"
        onClick={addRipple}
      >
        {ripples.map((ripple, index) => (
          <div
            key={index}
            className="ripple"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
