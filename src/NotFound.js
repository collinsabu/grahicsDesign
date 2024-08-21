import React from 'react'

import { motion } from "framer-motion"

const notFoudVariants = {

  start: {
    x: -1000,
    opacity: 0
  },

  end: {
    x: 0,
    opacity: 1,
   
    transition: {
      type: "spring",
      stiffness: 150,
      ease: "easeInOut",
      duration: 0.15
    }
  }
}

const NotFound = () => {
  return (
    <motion.div className='notfound-section'
    variants={notFoudVariants}
    initial="start"
    animate="end"
    
    >
      <img src="https://i.postimg.cc/VLvVdgwV/404page.png" alt="404 page" srcset="" />

      <div>
         <h2>404-PAGE NOT FOUND</h2>
         <p>`The page you are looking for cannot be found or might have been remove </p>
         <a href="https://www.collinsabu.tech" target="_blank" className='btn'>Go Home</a>

      </div>
    </motion.div>
  )
}

export default NotFound