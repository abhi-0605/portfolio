import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-lg"
          : "py-5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md"
      }`}
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8">

        {/* Logo */}
        <motion.h1
          whileHover={{
            scale: 1.08,
            rotate: -2,
          }}
          className="text-2xl font-bold cursor-pointer text-black dark:text-white"
        >
          Abhinav
        </motion.h1>


        <div className="flex items-center gap-4 md:gap-8">

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-lg">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">

                <a
                  href={link.href}
                  className={`transition duration-300 ${
                    active === link.href.substring(1)
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </a>

                {active === link.href.substring(1) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-2 h-0.5 w-full rounded-full bg-blue-600"
                  />
                )}

              </li>
            ))}
          </ul>


          {/* Theme Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors duration-300"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-black dark:text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-6 py-6 bg-white dark:bg-zinc-900 shadow-lg"
        >

          {navLinks.map((link) => (
            <li key={link.name}>

              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg transition ${
                  active === link.href.substring(1)
                    ? "text-blue-600"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>

            </li>
          ))}

        </motion.ul>
      )}

    </motion.nav>
  );
}

export default Navbar;