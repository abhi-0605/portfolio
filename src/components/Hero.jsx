
import React from 'react'
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center bg-green-50 px-6 pt-24'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        <div>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-blue-600 font-semibold"
          >
            Hello, I'm
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mt-3"
          >
            Abhinav Kumar
          </motion.h1>



          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-gray-600 mt-4"
          >
            Full Stack Web Developer
          </motion.h2>



          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-500 leading-7"
          >
            I build responsive, modern and user-friendly web applications
            using React, Node.js, Express and MongoDB.
          </motion.p>



          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#contact"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
            >Contact Me</a>

            <a href="/resume.pdf"
                className='border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300'
            >Resume</a>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img src="/images/hero.png" alt="abhinav" className='w-72 md:w-80 lg:w-96 rounded-full shadow-xl' />
        </motion.div>


      </div>
    </section>
  )
}

export default Hero
