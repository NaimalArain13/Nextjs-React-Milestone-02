"use client";
import ProjectCard from "../components/projectCard";

export default function Project() {
  const projects = [
    {
      img: "/num.jpg",
      title: "Number Guessing CLI",
      description: "Interactive CLI game to guess numbers, built with TypeScript.",
      route: "//github.com/NaimalArain13/number-guessing-game13",
    },
    {
      img: "/blog.jpg",
      title: "Dynamic Blog Platform",
      description: "Responsive blog platform for writing and sharing articles.",
      route: "//blog-platform-by-na.vercel.app/",
    },
    {
      img: "/todo.jpg",
      title: "Todo App",
      description: "Task management app to organize and track daily activities.",
      route: "//my-todo-app-green.vercel.app/",
    },
    {
      img: "/atm.jpg",
      title: "ATM CLI",
      description: "Command-line ATM simulation with essential banking operations.",
      route: "//github.com/NaimalArain13/cli-ATM-Project",
    },
  ];

  return (
    <div className="container mx-auto overflow-x-hidden px-6 lg:px-20">
    <div className="bg-bg p-4">
      <h1 className="flex items-center justify-center pt-8 pb-16 text-5xl font-bold tracking-widest bg-gradient-to-r from-black to-cyan-100 bg-clip-text text-transparent">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} prop={project} />
        ))}
      </div>
    </div>
    </div>
  );
}
