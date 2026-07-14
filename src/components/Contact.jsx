import React from 'react'
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MapIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedin } from 'react-icons/lia';

function Contact() {
  return (
    <section
      id='contact'
      className='min-h-screen py-20 px-6 bg-white/60 backdrop-blur-sm flex items-center justify-center '
    >


      <div className='w-full max-w-5xl '>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-500 hover:shadow-2xl'
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-center"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-lg md:text-xl text-gray-600 mt-4 mb-10 max-w-3xl mx-auto leading-8"
          >
            Have a question or ready to start your next project?
            <br />
            Feel free to reach out. I'd love to hear from you.
          </motion.p>

          <form className='space-y-6'>
            <div >
              <label className='font-semibold text-lg'>Name</label>
              <input
                type='text'
                placeholder='Enter Your Name'
                className='w-full mt-2 border border-gray-300 rounded-xl px-5 py-4 text-lg resize-none outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-300'
              ></input>
            </div>

            <div >
              <label className='font-semibold'>Surname</label>
              <input
                type='text'
                placeholder='Enter Your Surname'
                className='w-full mt-2 border border-gray-300 rounded-xl px-5 py-4 text-lg resize-none outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-300'              ></input>
            </div>

            <div >
              <label className='font-semibold'>Email</label>
              <input
                type='email'
                placeholder='Enter Your email'
                className='w-full mt-2 border border-gray-300 rounded-xl px-5 py-4 text-lg resize-none outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-300'              ></input>
            </div>

            <div >
              <label className='font-semibold'>Message</label>
              <textarea
                rows={5}
                placeholder='Write your message...'
                className='w-full mt-2 border border-gray-300 rounded-xl px-5 py-4 text-lg resize-none outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-300'              ></textarea>
            </div>

            <motion.button
              whileHover={{
                scale: 1.03,
                backgroundColor: "#222",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 cursor-pointer"
            >
              Submit
            </motion.button>

          </form>

        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className='text-3xl font-bold mb-6 '>Other Ways to Connect</h3>

          <div className='flex flex-wrap justify-center items-center gap-x-12 gap-y-6 my-10 '>



            <a href="https://github.com/abhi-0605" target='_blank' rel='noreferrer'
              className='flex items-center gap-3 text-lg text-gray-700 hover:text-black hover:scale-105 transition-all duration-300'
            >
              <FaGithub size={22} />
              github.com/abhi-0605
            </a>

            <a href="https://www.linkedin.com/in/abhi0605/" target='_blank' rel='noreferrer'
              className='flex items-center gap-3 text-lg text-gray-700 hover:text-black hover:scale-105 transition-all duration-300'
            >
              <LiaLinkedin size={27}></LiaLinkedin>
              linkedin.com/in/abhi0605
            </a>
          </div>

          <div className='flex justify-center mt-8'>
            <a href="mailto:abhinavkumar18jun@gmail.com"
              className='flex items-center gap-3 text-lg text-gray-700 hover:text-black hover:scale-105 transition-all duration-300'
              >
              <Mail size={22}></Mail>
              abhinavkumar18jun@gmail.com
            </a>
          </div>


        </motion.div>
      </div>
    </section>
  )
}

export default Contact
