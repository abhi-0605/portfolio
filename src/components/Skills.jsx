import React from 'react'
import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id='skills'
      className='min-h-screen bg-gray-50 py-20 px-6'
    >
      <div className='max-w-6xl mx-auto '>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14"
        >
          My Skills 
        </motion.h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
            skills.map((skill,index) =>(
              <motion.div
                key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className='bg-white rounded-xl shadow-md p-6 text-center text-lg font-semibold cursor-pointer'
              >
                {skill}
              </motion.div>
            ))
          }

        </div>


      </div>
    </section>
  )
}

export default Skills
