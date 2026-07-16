import React from 'react'
import { motion } from "framer-motion";
import { Mail, Heart, MailIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

function Footer() {
  return (
    <footer className='bg-black dark:bg-zinc-950 text-white py-12 px-6 transition-colors duration-300'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col md:flex-row justify-between items-center gap-8'
        >
          <div className='text-center md:text-left'>
            <h2 className='text-3xl font-bold tracking-wide'>Abhinav Kumar</h2>
            <p className='text-gray-400 dark:text-gray-500 mt-2 text-lg'>Full Stack Developer</p>
          </div>



          <div className='flex items-center justify-center gap-8'>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://github.com/abhi-0605"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 transition"
            >
              <FaGithub className='text-[24px]' />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://www.linkedin.com/in/abhi0605/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 dark:bg-zinc-800 hover:bg-blue-600 transition"
            >
              <LiaLinkedin className='text-[28px]' />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="mailto:abhinavkumar18jun@gmail.com"
              aria-label="Send Email"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 dark:bg-zinc-800 hover:bg-red-500 transition"
            >
              <MailIcon size={26} />
            </motion.a>

          </div>
        </motion.div>

        <div className='my-8 h-px bg-linear-to-r from-transparent via-gray-600 dark:via-gray-700 to-transparent'></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 dark:text-gray-500"
        >
          <p className='text-center md:text-left'
          >© {new Date().getFullYear()} Abhinav Kumar. All Rights Reserved.</p>

          <p className='flex items-center justify-center gap-2 text-center'
          >Made with
            <Heart size={18} className='fill-red-500 text-red-500 animate-pulse'
            />using React & Tailwind CSS
          </p>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer
