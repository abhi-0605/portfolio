import { motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect } from 'react'


function MouseGlow() {
    const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x=useSpring(mouseX,{
    stiffness:120,
    damping:20,
  })
  const y=useSpring(mouseY,{
    stiffness:120,
    damping:20,
  })

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    }
  }, [mouseX, mouseY])
  

  return (
    <motion.div
        style={{
        x,
        y,
      }}
      className="fixed top-0 left-0 w-75 h-75 rounded-full pointer-events-none z-0"
    >
        <div className='w-full h-full rounded-full bg-blue-500/20 blur-[120px]'/>

    </motion.div>
  )
}

export default MouseGlow
