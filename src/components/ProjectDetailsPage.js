import React, { useState, useEffect } from 'react';

import "./css/projectdetailspage.css";




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

function ProjectDetailsPage(props) {


const [selectedImg, setSelectedImg] = useState(null);


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
    Image11];




const handleImageClick = (imgSrc) => {
    setSelectedImg(imgSrc);
}

const handleCloseClick = () => {
    setSelectedImg(null);
}



return (
    <>
        <>
        <div className='page-header'>
            <div className='overlay'></div>
            <h1>تفاصيل المشروع</h1>
        </div>


        <div className="project-details">
            <div className="container">
            <div className="project-details-content">
                <div className="image">
                <img src={props.img} alt="project" />
                <h1> {props.name} </h1>

                <div className="side-overlay">
                    <h2> ملخص المشروع </h2>
                    <p>{props.shortdescription}</p>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="project-details-description">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="description">
                    <h1>تفاصيل المشروع</h1>
                    <p> {props.description}</p>
                </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="project-gallery">

            {images.filter(photo => photo.projectId === project?.id).map((imgSrc, index) => (
                    <img 
                        key={index} 
                        src={imgSrc} 
                        alt={`Image ${index}`} 
                        className="gallery-img"
                        onClick={() => handleImageClick(imgSrc)}
                    />
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
            </div>
        </div>






        </>
    
    </>
)
}

export default ProjectDetailsPage;
