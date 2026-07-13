import React from 'react'
import { motion } from "framer-motion";
import projects from "../data/projects";

function Projects() {
    return (
        <section
            id='projects'
            className='py-20 px-6 bg-white'
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
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.5,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className='bg-green-50 rounded-xl shadow-lg overflow-hidden'
                            >
                                <img src={project.image} alt={project.title} className='h-56 w-full object-cover' />

                                <div className='p-6'>
                                    <h3 className='text-2xl font-bold'>
                                        {project.title}
                                    </h3>

                                    <p className='text-green-600 mt-3'>
                                        {project.description}
                                    </p>

                                    <div className='flex flex-wrap gap-2 mt-5'>
                                        {project.tech.map((tech,i)=>(
                                            <span
                                                key={i}
                                                className='px-3 py-1 bg-black text-white rounded-full text-sm'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>


                                    <div className='flex gap-4 mt-6'>
                                        <a href={project.github} className='px-4 py-2 bg-black text-white rounded-lg'> GitHub</a>
                                        <a href={project.live} className='px-4 py-2 border rounded-lg'>Live Demo</a>
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
