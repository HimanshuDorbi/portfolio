import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

const BlogCard = ({ id, image, title, content }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const redirectToExample = () => {
    window.location.href = "https://codingcraftai.blogspot.com/";
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      key={id}
      className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.4 }}
    >
      <img
        src={image}
        alt={title}
        className="rounded-t-lg object-cover h-48 w-full"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{content}</p>
        <div className="flex items-center justify-center">
          <button
            onClick={redirectToExample}
            className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-md hover:scale-105 transition-transform duration-300"
          >
            Read more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const initialBlogs = [
    { id: 1, image: blog1, title: "Blog 1", content: "Decoding CMS and Headless CMS: Unveiling the Power Behind Content Management Systems" },
    { id: 2, image: blog2, title: "Blog 2", content: "Oops 404 and more! Website Errors: What They Mean and How to Handle Them" },
    { id: 3, image: blog3, title: "Blog 3", content: "The Rise of Headless CMS: Benefits and Use Cases, How you can be benefited as a developer" },
    { id: 4, image: blog4, title: "Blog 4", content: "Mastering Your React Project: Push to GitHub in Both Main and Master Branch from VS Code!" },
  ];

  const [blogs] = useState(initialBlogs);
  const [visibleBlogs, setVisibleBlogs] = useState(4);

  const handleLoadMore = () => {
    setVisibleBlogs(visibleBlogs + 4);
  };

  const redirectToExample = () => {
    window.location.href = "https://codingcraftai.blogspot.com/";
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Blogs
          </p>
          <p className="py-6 text-white">These are my latest articles</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 sm:px-0">
          {blogs.slice(0, visibleBlogs).map(({ id, image, title, content }) => (
            <BlogCard
              key={id}
              id={id}
              image={image}
              title={title}
              content={content}
            />
          ))}
        </div>

        {visibleBlogs < blogs.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-md hover:shadow-lg hover:scale-105 transition-colors"
            >
              Read more
            </button>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <div className="text-xl text-center text-white">
            For more development content, click the&nbsp;
            <button
              onClick={redirectToExample}
              className="underline text-white hover:text-gray-300"
            >
              Visit button
            </button>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
