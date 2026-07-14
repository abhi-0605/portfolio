
import React from 'react'
import { motion } from "framer-motion";
import MagneticButton from "../animations/MagneticButton";
import { TypeAnimation } from "react-type-animation";


function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-6 pt-24 bg-transparent'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        <div>


          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="text-lg text-blue-600 font-semibold"
          >
            Hello, I'm
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-5xl md:text-6xl font-bold mt-3"
          >
            Abhinav Kumar
          </motion.h1>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.8,
            }}
            className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4 h-10"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </motion.div>



          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.8,
            }}
            className="mt-6 text-gray-500 leading-8"
          >
            I build responsive, modern and user-friendly web applications
            using React, Node.js, Express and MongoDB.
          </motion.p>



          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            className="mt-8 flex gap-4"
          >
            <MagneticButton
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </MagneticButton>

            <MagneticButton
              className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
              onClick={() => window.open("/resume.pdf")}
            >
              Resume
            </MagneticButton>
          </motion.div>
        </div>


        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: {
              duration: 1,
            },
            scale: {
              duration: 1,
            },
            rotate: {
              duration: 1,
            },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >
          <img src="/images/hero.png" alt="abhinav" className='w-72 md:w-80 lg:w-96 rounded-full shadow-2xl' />
        </motion.div>


      </div>
    </section>
  )
}

export default Hero
