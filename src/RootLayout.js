import React, {useState} from 'react'
import { Outlet, NavLink } from "react-router-dom"
import { IoMdCloseCircle } from "react-icons/io"
import { HiMenu } from "react-icons/hi"

// framer-motion import
import { motion } from "framer-motion"


const RootLayout = () => {
   const [showNav, setShowNav] = useState(false);

   const navVariants = {
      start: {
         opacity: 0
      },

      end: {
         opacity: 1,

         transition: {
            duration: 1,
            ease: 'easeInOut'
         }
      }
   }

   const HideNav = () => {
      setShowNav(false)
   }

   const openNav = () => {
      setShowNav(true)
   }

  return (

    <div>
            <header>
               <div className="first-nav">
                  <HiMenu className='first-nav-icon' onClick={openNav}/>
               </div>

               <nav className='desktop'>
                  <h1><a href='https://www.collinsabu.tech' target='_blank'>Collins  Abu</a></h1>
                  <div className="nav-links">
                     <NavLink to="/" className="nav-links">
                           Graphics
                     </NavLink>
                     <NavLink to="/uidesigns" className="nav-links nav2"  >
                           UIDesigns
                     </NavLink>  
                  </div>
               
               </nav>
              {showNav && (
               <motion.nav
               variants={navVariants}
               initial='start'
               animate='end'
               >
               <IoMdCloseCircle className='nav-icon' onClick={HideNav}/>
                  <h1><a href='https://www.collinsabu.tech' target='_blank' className='mobile-logo-link'>Collins</a></h1>
                  <div className="nav-links">
                     <NavLink to="/" className="nav-links">
                           Graphics
                     </NavLink>
                     <NavLink to="/uidesigns" className="nav-links nav2"  >
                           UIDesigns
                     </NavLink>
                  </div>
               </motion.nav>
              )} 

            </header>

         <main>

            <Outlet />

         </main>

    </div>

  )
}

export default RootLayout