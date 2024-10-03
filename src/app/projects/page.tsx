'use client'
import React from "react";
import { GlareCard } from "@/components/ui/glare-card";
import Link from "next/link";
import Footer from "@/components/Footer";

const courses = [
  {
    title: "Homify",
    description: "Homify is a vacation rental platform that enables users to browse, book, and manage properties.",
    image: "/airbnb.jpg",
    link: "https://homify-2.onrender.com/"
  },
  {
    title: "AI SketchBook",
    description: "A NextJs project using Canva.js , Tailwind CSS,with drawing, erasing, redo, undo, and download features. ",
    image: "sketchpad.jpg",
    link: "https://sketchpad-pi.vercel.app/"
  },
  {
    title: "CodeVault",
    description: "Built a web app for managing code snippets, allowing users to create, update, delete, and view pastes.",
    image: "vault.jpg",
    link: "https://codevault-vert.vercel.app/"
  },
  {
    title: "Chess.com",
    description: "This is an online chess game built using Express, Socket.io, and the Chess.js library.",
    image: "/chessbgm.jpg",
    link: "https://chess-com-xkwc.onrender.com/"
  },
  {
    title: "Music academy",
    description: "Developed a web app for a music school, featuring personalized courses, webinars.",
    image: "musicapp.jpg",
    link: "https://music-academy1.onrender.com/"
  },
  {
    title: "Medium Clone",
    description: "Medium-like blogging platform built using TypeScript, PostgreSQL, Express, React, and Wrangler",
    image: "image.png",
    link: "www.google.com" 
  },
  {
    title: "DostAI",
    description: "Developed an app integrating React and Google Generative AI for real-time text-generation.",
    image: "dostai.jpg",
    link: "www.google.com"
  },
  {
    title: "Telegram Bot",
    description: "An automated bot for Telegram, designed to interact with users and perform specific tasks.",
    image: "bot.png",
    link: "http://t.me/ExtroMediaBot"
  },
];

function page() {

  return (
    <div className="min-h-screen bg-black mt-40">
        <div className="pt-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8" >
        {courses.map((course, index) => (
          <Link key={index} href={course.link} target="_blank" rel="noopener noreferrer">
          <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
            <img
              className="h-60 w-full absolute inset-0 object-cover"
              src={course.image} alt="image"
            />
            <p className="font-bold text-white text-lg">{course.title}</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              {course.description}
            </p>
          </GlareCard>
        </Link>
        ))}
    </div>
    <Footer/>
    </div>
  )
}

export default page
