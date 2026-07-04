"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

export default function Skills() {
  const frontend = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-5xl" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-5xl" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-5xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
    },
  ];

  const backend = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-5xl" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-5xl" />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="text-5xl" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-500 text-5xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-5xl" />,
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-500 text-5xl" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-5xl" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500 text-5xl" />,
    },
    {
      name: "VS Code",
      icon: <FaCode className="text-blue-500 text-5xl" />,
    },
  ];

  const SkillCard = ({ title, data }) => (
    <div>
      <h3 className="text-3xl font-bold text-cyan-400 mb-8">{title}</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="bg-[#111827] border border-cyan-500 rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-[0_0_20px_#06b6d4] duration-300"
          >
            {skill.icon}

            <h4 className="font-semibold">{skill.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-center text-gray-400 mt-4 mb-20">
            Technologies and tools I use for building modern web applications.
          </p>
        </motion.div>

        <div className="space-y-16">

          <SkillCard title="Frontend" data={frontend} />

          <SkillCard title="Backend" data={backend} />

          <SkillCard title="Tools" data={tools} />

        </div>

      </div>
    </section>
  );
}