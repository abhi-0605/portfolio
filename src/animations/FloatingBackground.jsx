import React from 'react'
import { motion } from "framer-motion";

function FloatingBackground() {
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-[-1]'>
        <motion.div
        className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-blue-400/40 blur-[140px]"
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />




      <motion.div
        className="absolute top-1/3 -right-32 w-112.5 h-112.5 rounded-full bg-purple-400/35 blur-[140px]"
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      <motion.div
        className="absolute bottom-0 left-1/3 w-100 h-100 rounded-full bg-pink-400/35 blur-[140px]"
        animate={{
          x: [0, 80, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      

    </div>
  )
}

export default FloatingBackground
