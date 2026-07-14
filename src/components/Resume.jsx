import React from 'react'
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

function Resume() {
  return (
    <section
      id='resume'
      className='min-h-screen flex items-center justify-center py-20 px-6 bg-transparent'
    >
      <div className='max-w-5xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{
            y: -10,
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          }}
          className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 text-center"
        >
          <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-black text-white mb-6">
            <FileText size={36} />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Resume
          </h2>

          <p className="text-gray-600 leading-7 mb-8">
            Download my latest resume to learn more about my education,
            technical skills, projects, certifications, and experience.
          </p>
        </motion.div>




        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-semibold transition mt-4"
        >
          <FileText size={22} />
          <span>Download Resume</span>
        </motion.a>



      </div>
    </section>
  )
}

export default Resume
