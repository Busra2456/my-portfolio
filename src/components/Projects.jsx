"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Prisma Press Backend",
    image: "/images/project1.png",
    description:
      "A Blog REST API with JWT Authentication, Role Based Authorization, Prisma ORM and PostgreSQL.",
    technologies: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
    ],
    github: "https://github.com/Busra2456/prisma-press-backend",
    live: "#",
  },

  {
    id: 2,
    title: "Portfolio Website",
    image: "/images/project2.png",
    description:
      "Modern responsive portfolio built with Next.js, Tailwind CSS and Framer Motion.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React",
    ],
    github: "#",
    live: "#",
  },

  {
    id: 3,
    title: "E-Commerce Website",
    image: "/images/project3.png",
    description:
      "Responsive e-commerce application with product listing and authentication.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
    ],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0B1120] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Some of my recent projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-[#111827] rounded-2xl overflow-hidden border border-cyan-500"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 border border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-500 duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}