import React from "react";
import { Button } from "@/components/ui/moving-border";
const About = () => {
  return (
    <div className="bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden" id="about">
      <div className="flex flex-col justify-around">
        <div className="sm:px-16 px-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-16">Introduction</h2>
          <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
            Hi! I'm Anand, a BMSIT student and passionate full stack developer skilled in NextJS, TypeScript, TailwindCSS, and the MERN stack (MongoDB, Express.js, React.js, Node.js).
          </p>
          <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
            I love tackling coding challenges, collaborating with developers, and creating efficient solutions. With a solid foundation in front-end and back-end technologies and over 150 LeetCode problems solved, I deliver high-quality, scalable code.
          </p>
          <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
            Tools & Technologies:
            <br/>
            Languages : C , C++ , Javacript , TypeScript
            <br/>
            Framework : ExpressJS , NodeJS , ReactJS , NextJs , Hono 
            <br/>
            Libraries : Bootstrap , TailwindCSS.
            <br/>
            Database: MongoDB, PostgreSQl
            <br/>
            Tools: Git, GitHub, Postman
          </p>
        </div>  
        <div className="flex flex-col sm:flex-row justify-between gap-4 m-12 ">
          <Button
            borderRadius="1rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full sm:w-auto"
          >
            Resume
          </Button>
          <a href="https://leetcode.com/anand016/" target="_blank" className="w-full sm:w-auto">
            <Button
              borderRadius="1rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full sm:w-auto"
            >
              LeetCode
            </Button>
          </a>
          <a href="https://github.com/anandkumar16" target="_blank" className="w-full sm:w-auto">
            <Button
              borderRadius="1rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full sm:w-auto"
            >
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default About;
