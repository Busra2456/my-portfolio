export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Busra
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#home" className="hover:text-cyan-400 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button */}
        <button className="hidden md:block bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-medium duration-300">
          Resume
        </button>

      </div>
    </nav>
  );
}