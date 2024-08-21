import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io"
import './styles.css';


//images import
import School from "./images/backtoschool-s.jpg";
import Church from "./images/church-flyer-s.jpg";
import Business from "./images/business-flyers-s.jpg";
import Digital from "./images/digital-Mraketing-s.jpg";
import Food from "./images/foof-fest-s.jpg";
import Rugby from "./images/cardiff-rugby-s.jpg"

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

const Graphics = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (

   <motion.div
   
   variants={uiVariants}
   initial="start"
   animate="end"
   
   >
  <div className='content-div'>
  <h1>Welcome</h1>
    <p>Relax and enjoy graphics design with Collins Abu</p>
  </div>
    

    <div className="gallery">
      {selectedImage && (
        <div className="image-popup" >
          <img src={selectedImage} alt="Selected" />
          <div className="close-icon" onClick={closeImage}>
            <IoMdCloseCircle/>
          </div>
        </div>
      )}

      <div className="image-grid">
        <img
          src={Food}
          alt="Vibrant food festival poster showcasing a variety of delicious dishes, culinary icons, and event details, capturing the excitement and flavors of a lively food festival"
          onClick={() => openImage('https://i.postimg.cc/bv1y5ZSL/foof-fest-s.jpg')}
        />
        <img
          src={Rugby}
          alt="Cardiff Rugby team logo featuring the emblem of a rugby ball and the name 'Cardiff' in bold typography, representing the strength and spirit of the rugby club"
          onClick={() => openImage('https://i.postimg.cc/8PnzfQVd/cardiff-rugby-s.jpg')}
        />
        <img
          src={Digital}
          alt="llustration representing digital marketing strategies with icons of social media, analytics, email, and search engine optimization (SEO), symbolizing the power of online marketing for businesses"
          onClick={() => openImage('https://i.postimg.cc/y8M6nmxk/digital-Mraketing-s.jpg')}
        />
        <img
          src={School}
          alt="Colorful 'Back to School' graphic with various educational elements, including books, pencils, and a chalkboard, symbolizing the excitement of starting a new academic year."
          onClick={() => openImage('https://i.postimg.cc/pXdddV3X/backtoschool-s.jpg')}
        />
        <img
          src={Business}
          alt="Set of professional business flyers showcasing diverse designs and layouts for marketing campaigns, product promotions, and corporate events"
          onClick={() => openImage('https://i.postimg.cc/Qd9xp4X2/business-flyers-s.jpg')}
        />
        <img
          src={Church}
          alt="Colorful church flyer with vibrant design promoting upcoming events, services, and community gatherings."
          onClick={() => openImage('https://i.postimg.cc/k4msvSqC/church-flyer-s.jpg')}
        />
      </div>

       <a href="https://www.instagram.com/dev_collinsabu/" target='_blank' className='galleryBtn'> More Designs on Instagram </a>
    </div>
    </motion.div>
  );
};

export default Graphics;
