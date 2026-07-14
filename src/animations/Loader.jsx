import { motion } from "framer-motion";
import React from 'react'

function Loader() {
    return (
        <motion.div
            className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                y: "-100%",
                transition: {
                    duration: 0.8,
                    ease: "easeInOut",
                },
            }}
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="text-white text-5xl font-bold tracking-wider"
            >
                Abhinav
            </motion.h1>

            <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
            >

            </motion.div>

        </motion.div>
    )
}

export default Loader
