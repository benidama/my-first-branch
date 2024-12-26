import React from "react";
import Jsfunction from "./Jsfunction";
import Bootsrap from "./Bootsrap";

const Blogs = () => {
  return (
    <div className="container">
      <h1 className="text-center"> About me </h1>

      <p className="container">
        I am a web developer's. I focus on building web applications, and
        android applications using JavaScript language, and its technologies
        like NodeJs, React, React Native, and Redux. I like coding and I am very
        passionate about it. Whenever I have free time I play guitar and enjoy
        classic music, reading books mostly those talking about technology, and
        business. I am passionate about what I do and a big fun of delivering
        quality work and learning more skills.
      </p>
      <Jsfunction />
      <Bootsrap />
    </div>
  );
};

export default Blogs;
