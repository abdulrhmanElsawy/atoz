import './css/gallery.css';
import React, { useState,useEffect } from 'react';
import Logo from './images/logo.png';
import Navbar from './Navbar';
import imageSlide1 from './images/landing3.jpg';



import Image1 from './images/1.jpeg';
import Image2 from './images/2.jpeg';
import Image3 from './images/3.jpeg';
import Image4 from './images/4.jpeg';
import Image5 from './images/5.jpeg';
import Image6 from './images/6.jpeg';
import Image7 from './images/7.jpeg';
import Image8 from './images/8.jpeg';
import Image9 from './images/9.jpeg';
import Image10 from './images/10.jpeg';
import Image11 from './images/11.jpeg';
import Image12 from './images/12.jpeg';
import Image13 from './images/13.jpeg';
import Image14 from './images/14.jpeg';
import Image15 from './images/15.jpeg';
import Image16 from './images/16.jpeg';
import Image17 from './images/17.jpeg';
import Image18 from './images/18.jpeg';
import Image19 from './images/19.jpeg';

const Gallery = () => {




  
  const images = [Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19];

    


  const [selectedImg, setSelectedImg] = useState(null);



  const handleImageClick = (imgSrc) => {
    setSelectedImg(imgSrc);
  }

  const handleCloseClick = () => {
    setSelectedImg(null);
  }










  return (
    <>

<section  id="home" className="landing">
                <div className="overlay"></div> 
                    <div className="landing-content">
                            <img src={imageSlide1} alt="logo" />
                        <h1> معرض الصور </h1>

                    </div>
            </section>




<div className='container'>
  <div className='row'>
    <div className="gallery">
      {images.map((imgSrc, index) => (
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
          <img 
            key={index} 
            src={imgSrc} 
            alt={`Image ${index}`} 
            className="gallery-img"
            onClick={() => handleImageClick(imgSrc)}
          />
        </div>
      ))}
      {selectedImg && (

            <div className="modal">
              <span className="close" onClick={handleCloseClick}>&times;</span>
              <img src={selectedImg} alt="Selected Image" className="modal-img" />
            </div>
          
        

      )}
    </div>

  </div>
</div>
    </>

  );
};

export default Gallery;
