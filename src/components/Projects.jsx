import React from 'react'
import { motion } from "framer-motion";
import projects from "../data/projects";

function Projects() {
    return (
        <section
            id='projects'
            className='py-20 px-6 bg-white/60 backdrop-blur-sm'
        >
            <div className='max-w-7xl mx-auto'>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-14"
                >
                    My Projects
                </motion.h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.15,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                }}
                                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-md transition-all duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.18)] hover:border-blue-400"
                            >
                                <div className="overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-56 w-full object-cover"
                                        whileHover={{
                                            scale: 1.08,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                    />
                                </div>

                                <div className='p-6 space-y-4'>
                                    <h3 className='text-2xl font-bold group-hover:text-blue-600 transition'>
                                        {project.title}
                                    </h3>

                                    <p className='text-green-600 mt-3'>
                                        {project.description}
                                    </p>

                                    <div className='flex flex-wrap gap-2 mt-5'>
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className='px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 transition duration-300 group-hover:bg-black group-hover:text-white'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>


                                    <div className='flex gap-4 pt-2'>
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 rounded-lg bg-black text-white transition"
                                        >
                                            GitHub
                                        </motion.a>
                                        <motion.a
                                            whileHover={{
                                                scale: 1.08,
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                            }}
                                            href={project.live} className='px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition'>Live Demo</motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects
