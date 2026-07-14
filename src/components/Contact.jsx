import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MapIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedin } from 'react-icons/lia';
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.name.value || !form.surname.value || !form.email.value || !form.message.value) {
      toast.error("Please fill all fields.")
      return;
    }

    setLoading(true);

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      toast.success("Message sent successfully!");
      form.reset();
    }).catch((error) => {
      console.error(error);
      toast.error("Failed to send message.");
    }).finally(() => {
      setLoading(false)
    })
  }
  return (
    <section
      id='contact'
      className='min-h-screen py-20 px-6 sm:px-6 bg-transparent dark:bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center transition-colors duration-300'
    >


      <div className='w-full max-w-5xl '>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 transition-all duration-500 hover:shadow-2xl'
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-4xl font-bold text-center text-black dark:text-white"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-lg sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4 mb-10 max-w-3xl mx-auto leading-8"
          >
            Have a question or ready to start your next project?
            <br />
            Feel free to reach out. I'd love to hear from you.
          </motion.p>

          <form onSubmit={sendEmail} className='space-y-6'>
            <div >
              <label className='font-semibold text-black dark:text-white text-base sm:text-lg'>Name</label>
              <input
                type='text'
                name="name"
                placeholder='Enter Your Name'
                className='w-full mt-2 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-xl px-5 py-4 text-lg resize-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition duration-300'
              ></input>
            </div>

            <div >
              <label className='font-semibold text-black dark:text-white text-base sm:text-lg '>Surname</label>
              <input
                type='text'
                name="surname"
                placeholder='Enter Your Surname'
                className='w-full mt-2 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-xl px-5 py-4 text-lg resize-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition duration-300'               ></input>
            </div>

            <div >
              <label className='font-semibold text-black dark:text-white text-base sm:text-lg '>Email</label>
              <input
                type='email'
                name="email"
                placeholder='Enter Your email'
                className='w-full mt-2 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-xl px-5 py-4 text-lg resize-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition duration-300'              ></input>
            </div>

            <div >
              <label className='font-semibold text-black dark:text-white text-base sm:text-lg'>Message</label>
              <textarea
                rows={5}
                name="message"
                placeholder='Write your message...'
                className='w-full mt-2 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-xl px-5 py-4 text-lg resize-none outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition duration-300'              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
    w-full 
    bg-black 
    dark:bg-white 
    text-white 
    dark:text-black 
    sm:py-4
    py-4 
    rounded-xl 
    text-base sm:text-lg 
    font-semibold 
    transition-all 
    duration-300 
    cursor-pointer 
    disabled:opacity-60
  "
            >
              {loading ? "Sending..." : "Submit"}
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
          <h3 className='text-3xl sm:text-3xl font-bold mb-6 text-black dark:text-white '>Other Ways to Connect</h3>

          <div className='flex flex-wrap justify-center items-center gap-x-12 gap-y-6 my-10 '>



            <a href="https://github.com/abhi-0605" target='_blank' rel='noreferrer'
              className='flex items-center gap-3 text-lg sm:flex-row  text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-105 transition-all duration-300'
            >
              <FaGithub size={22} />
              github.com/abhi-0605
            </a>

            <a href="https://www.linkedin.com/in/abhi0605/" target='_blank' rel='noreferrer'
              className='flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-105 transition-all duration-300'
            >
              <LiaLinkedin size={27}></LiaLinkedin>
              linkedin.com/in/abhi0605
            </a>
          </div>

          <div className='flex justify-center mt-8'>
            <a href="mailto:abhinavkumar18jun@gmail.com"
              className='flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-105 transition-all duration-300'
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
