import React from 'react'
import './styles.css'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const uiVariants = {
   start: {
      x: -1000,
      opacity: 0
   },

   end:{
     x: 0,
     opacity: 1,

     transition: {
       type: "spring",
       stiffness: 150,
       ease: "easeInOut",
       duration: 2
     }
   }
}

const Uidesigns = () => {

  return (

    < motion.div className='ui-section'
     variants={uiVariants}
     initial="start"
     animate="end"
    >
      <h1>This Page is Under Construction and Review</h1>
      <p>For Enquiries Please click <Link to="#" className='link'>Contact</Link></p>
    </ motion.div>

  )
}

export default Uidesigns;