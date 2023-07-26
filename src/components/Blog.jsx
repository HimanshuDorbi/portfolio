import React, { useState } from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

const Blog = () => {
  const initialBlogs = [
    { id: 1, image: blog1, title: "Blog 1", content: "Decoding CMS: Unveiling the Power Behind Content Management Systemsy" },
    { id: 2, image: blog2, title: "Blog 2", content: "Content for Blog 2 lorem epsum i love engineering and technology" },
    { id: 3, image: blog3, title: "Blog 3", content: "Content for Blog 3 lorem epsum i love engineering and technology for better future" },
    { id: 4, image: blog4, title: "Blog 4", content: "Content for Blog 4 lorem epsum i love engineering and technology" },
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
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Blogs
          </p>
          <p className="py-6">These are my latest articles</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 sm:px-0">
          {blogs.slice(0, visibleBlogs).map(({ id, image, title, content }) => (
            <div
              key={id}
              className="shadow-md rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:shadow-lg"
            >
              <img
                src={image}
                alt={title}
                className="rounded-t-md duration-200 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>{content}</p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={redirectToExample}
                  className="w-1/2 px-6 py-3 m-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-md hover:scale-105 transition-colors"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        {visibleBlogs < blogs.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-md hover:shadow-lg hover:scale-105 transition-colors"
            >
              read
            </button>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <div className="text-xl text-center">
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
