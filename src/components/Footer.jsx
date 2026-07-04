import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-cyan-500 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Busra
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Passionate Full Stack Developer building modern,
              responsive and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/Busra2456"
                target="_blank"
                className="hover:text-cyan-400 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="mailto:your@email.com"
                className="hover:text-cyan-400 duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Busra. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="bg-cyan-500 p-3 rounded-full hover:bg-cyan-600 duration-300"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}