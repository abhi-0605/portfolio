import React from 'react'
import { motion } from "framer-motion";


function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center px-8 py-5'>
        <h1 className='text-2xl font-bold'>Abhinav</h1>

        <ul className='hidden md:flex gap-8 text-lg'>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'></a>Skills</li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#resume'>Resume</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>

    </motion.nav>
  )
}

export default Navbar
