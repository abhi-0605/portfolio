
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
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
          ? "py-3 bg-white/70 backdrop-blur-xl shadow-lg"
          : "py-5 bg-white/50 backdrop-blur-md"
      }`}
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center px-8'>
        <motion.h1
          whileHover={{
            scale: 1.08,
            rotate: -2,
          }}
          className="text-2xl font-bold cursor-pointer"
        >
          Abhinav
        </motion.h1>

        <ul className="hidden md:flex gap-10 text-lg">

          {navLinks.map((link) => (
            <li key={link.name} className="relative">

              <a
                href={link.href}
                className={`transition duration-300 ${
                  active === link.href.substring(1)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>

              {active === link.href.substring(1) && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 h-0.75 w-full rounded-full bg-blue-600"
                />
              )}
            </li>
          ))}

        </ul>
      </div>

    </motion.nav>
  )
}

export default Navbar
