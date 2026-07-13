import React from 'react'
import { motion } from "framer-motion";


function About() {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center bg-white px-6 py-20'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>


        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
           <img src="/images/profile.png" alt="about" className='rounded-2xl shadow-xl'/>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className='text-4xl font-bold mb-6'>
            About Me
          </h2>

          <p className='text-gray-600 leading-8 '>
            I'm Abhinav Kumar, a Final Year Computer Science student
            passionate about Full Stack Development and Data Structures &
            Algorithms.
          </p>

          <p className='text-gray-600 leading-8 mt-5'>
            I enjoy building scalable web applications using React,
            Node.js, Express, MongoDB and Tailwind CSS. I'm currently
            looking for Software Development Internship opportunities.
          </p>

          <div className='grid grid-cols-2 gap-6 mt-8'>

            <div>
              <h3 className='font-bold'>Education</h3>
              <p>B.Tech CSE</p>
            </div>

            <div>
              <h3 className='font-bold'>Location</h3>
              <p>Greater Noida, India</p>
            </div>

            <div >
              <h3 className='font-bold'>Experience</h3>
              <p>Frontend & MERN Projects</p>
            </div>

            <div>
              <h3 className='font-bold'>Email</h3>
              <p>abhinavkumar18jun@gmail.com</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
