import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-2 justify-center max-w-screen-md mx-auto h-full">
        <div className="pb-4">
          <p className="text-3xl font-bold inline border-b-2 border-gray-500">
            Contact
          </p>
          <p className="py-4 text-sm">
            Submit the form below to get in touch with me
          </p>
        </div>
        <motion.div
          ref={mapRef}
          className="w-full h-96"
          initial={{ opacity: 0, y: 20 }}
          animate={mapInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.9435685765245!2d78.00228229999999!3d30.2687968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bebe00eebaf%3A0xb8c90aa94cdba92f!2sGokul%20dham%20society!5e0!3m2!1sen!2sin!4v1690888844054!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </motion.div>
        <div className="flex justify-center items-center">
          <form
            ref={formRef}
            action="https://getform.io/f/e941ee8b-dbd8-4e64-8c0b-65984c09bf90"
            method="POST"
            className="flex flex-col w-full bg-gray-700 p-6 rounded-md shadow-md"
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 placeholder-gray-400"
              value={formData.name}
              onChange={handleChange}
              required // Required field validation
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 placeholder-gray-400"
              value={formData.email}
              onChange={handleChange}
              required // Required field validation
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-2 placeholder-gray-400"
              value={formData.message}
              onChange={handleChange}
              required // Required field validation
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            ></motion.textarea>

            <motion.button
              className="bg-gradient-to-b from-cyan-500 to-blue-500 px-4 py-2 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <MdSend className="mr-2 text-white text-xl" />
              Let's talk
            </motion.button>
          </form>
        </div>

        <motion.div
          className="flex items-center justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/himanshu-dorbi/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-blue-500 rounded-full hover:bg-blue-600 duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <FaLinkedin className="text-white text-2xl" />
          </motion.a>
          <motion.a
            href="https://github.com/HimanshuDorbi"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-700 rounded-full hover:bg-gray-800 duration-300 ml-4"
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <FaGithub className="text-white text-2xl" />
          </motion.a>
          <motion.a
            href="mailto:dorbihimanshu306@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-red-500 rounded-full hover:bg-red-600 duration-300 ml-4"
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <HiOutlineMail className="text-white text-2xl" />
          </motion.a>
        </motion.div>
        <motion.p
          className="mt-4 text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Made with 💓 by Himanshu Dorbi
        </motion.p>
      </div>

      <div className="h-16 md:h-24"></div>
    </div>
  );
};

export default Contact;
