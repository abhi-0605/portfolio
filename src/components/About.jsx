import React from 'react'
import { motion } from "framer-motion";


function About() {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center py-20 px-6 bg-transparent dark:bg-zinc-950/60 backdrop-blur-sm'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>


        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/profile.webp"
            alt="About Abhinav Kumar"
            loading="lazy"
            decoding="async"
            width="658"
            height="658"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className='text-4xl font-bold mb-6 text-black dark:text-white'>
            About Me
          </h2>

          <p className='text-gray-600 dark:text-gray-400 leading-8 '>
            I'm Abhinav Kumar, a Final Year Computer Science student
            passionate about Full Stack Development and Data Structures &
            Algorithms.
          </p>

          <p className='text-gray-600 dark:text-gray-400 leading-8 mt-5'>
            I enjoy building scalable web applications using React,
            Node.js, Express, MongoDB and Tailwind CSS. I'm currently
            looking for Software Development Internship opportunities.
          </p>

          <div className='grid grid-cols-2 gap-6 mt-8'>

            <div>
              <h3 className='font-bold text-black dark:text-white'>Education</h3>
              <p className="text-gray-700 dark:text-gray-300">B.Tech CSE</p>
            </div>

            <div>
              <h3 className='font-bold text-black dark:text-white'>Location</h3>
              <p className="text-gray-700 dark:text-gray-300">Greater Noida, India</p>
            </div>

            <div >
              <h3 className='font-bold text-black dark:text-white'>Experience</h3>
              <p className='text-gray-700 dark:text-gray-300'>Frontend & MERN Projects</p>
            </div>

            <div>
              <h3 className='font-bold text-black dark:text-white'>Email</h3>
              <p className='text-gray-700 dark:text-gray-300'>abhinavkumar18jun@gmail.com</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
