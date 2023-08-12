import React, { useState, useEffect } from "react";
import { FaCircleNotch } from "react-icons/fa"; // Import the loading circle icon

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading with a setTimeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`preloader-container fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 ${
        loading ? "flex" : "hidden"
      }`}
    >
      {/* Use the FaCircleNotch icon for the loading animation */}
      <FaCircleNotch className="text-white text-4xl animate-spin" />
    </div>
  );
};

export default Preloader;
