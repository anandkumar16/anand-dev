'use client'
import React from "react";
import { GlareCard } from "@/components/ui/glare-card";

const courses = [
  {
    title: "Chess.com",
    description: "This is an online chess game built using Express, Socket.io, and the Chess.js library.",
    image: "/courses/guitar.jpg" 
  },
  {
    title: "Medium Clone",
    description: "Medium-like blogging platform built using TypeScript, PostgreSQL, Express, React, and Wrangler",
    image: "/courses/guitar.jpg" 
  },
  {
    title: "AI SketchBook",
    description: "Learn the basics of playing guitar with our comprehensive beginner's course.",
    image: "/courses/guitar.jpg" 
  },
  {
    title: "Trackify",
    description: "Learn the basics of playing guitar with our comprehensive beginner's course.",
    image: "/courses/guitar.jpg" 
  },
  {
    title: "Music academy",
    description: "Learn the basics of playing guitar with our comprehensive beginner's course.",
    image: "/courses/guitar.jpg" 
  },
  {
    title: "AI text-generator",
    description: "Learn the basics of playing guitar with our comprehensive beginner's course.",
    image: "/courses/guitar.jpg" 
  },
  {
    title: "Telegram Bot",
    description: "Learn the basics of playing guitar with our comprehensive beginner's course.",
    image: "/courses/guitar.jpg" 
  },
  {
    title: "payTM clone",
    description: "Learn the basics of playing guitar with our comprehensive beginner's course.",
    image: "/courses/guitar.jpg" 
  },
  {
    title: "AI-Saas",
    description: "Learn the basics of playing guitar with our comprehensive beginner's course.",
    image: "/courses/guitar.jpg" 
  },
];

function page() {

  return (
    <div className="min-h-screen bg-black py-12 pt-36 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-44 ">
        {courses.map((course, index) => (
          <GlareCard key={index} className="flex flex-col items-start justify-end py-8 px-6">
            <p className="font-bold text-white text-lg">{course.title}</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              {course.description}
            </p>
          </GlareCard>
        ))}
    </div>
    </div>
  )
}

export default page
