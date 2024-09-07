'use client'
import React from "react";
import Image from "next/image";
import { GlareCard } from "@/components/ui/glare-card";
import { Button } from "@/components/ui/moving-border";

const courses = [
  {
    title: "Chess.com",
    description: "This is an online chess game built using Express, Socket.io, and the Chess.js library.",
    image: "/chess.png" 
  },
  {
    title: "Medium Clone",
    description: "Medium-like blogging platform built using TypeScript, PostgreSQL, Express, React, and Wrangler",
    image: "image.png" 
  },
  {
    title: "AI SketchBook",
    description: "A NextJs project using Canva.js , Tailwind CSS,with drawing, erasing, redo, undo, and download features. ",
    image: "sketch.png" 
  },
  {
    title: "Trackify",
    description: "An EJS, Socket.io, and Express application used to track any person's location in real-time.",
    image: "loc.png" 
  },
  {
    title: "Music academy",
    description: "A Next.js application with Aceternity UI, designed for selling music courses online.",
    image: "music.png" 
  },
  {
    title: "AI text-generator",
    description: " this is an application which uses expressJS and utilized the Gemini AI model to generate text.",
    image: "text.png" 
  },
  {
    title: "Telegram Bot",
    description: "An automated bot for Telegram, designed to interact with users and perform specific tasks.",
    image: "bot.png" 
  },
  {
    title: "payTM clone",
    description: "Developed a digital payment application using React, Express, Tailwind CSS, and PostgreSQL.",
    image: "paytm.png" 
  },
  {
    title: "AI-Saas",
    description: " A Next.js and ShadCN application capable of generating text, images, code, and videos from user input.",
    image: "saas.png" 
  },
];

function page() {

  return (
    <div className="min-h-screen bg-black mt-40">
        <div className="pt-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8" >
        {courses.map((course, index) => (
          <GlareCard key={index} className="flex flex-col items-start justify-end py-8 px-6">
          <img
          className="h-60 w-full absolute inset-0 object-cover"
          src={course.image} alt="image"
        />
            <p className="font-bold text-white text-lg">{course.title}</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              {course.description}
            </p>
          {/* <button>GitHub</button>
          <button>Live</button> */}
          </GlareCard>
        ))}
    </div>
    </div>
  )
}

export default page
