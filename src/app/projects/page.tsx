'use client'
import React from "react";
import { GlareCard } from "@/components/ui/glare-card";
import Link from "next/link";
import Footer from "@/components/Footer";

const courses = [
  {
    title: "Synapsechat",
    description: "Built a real-time chat platform with Next,Socket.io,Prisma—featuring seamless messaging and a slick",
    image: "/discord.png",
    link: "https://synapsechat-production.up.railway.app/"
  },
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
    title: "DostAI",
    description: "Developed an app integrating React and Google Generative AI for real-time text-generation.",
    image: "dostai.jpg",
    link: "https://dostai.vercel.app/"
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
