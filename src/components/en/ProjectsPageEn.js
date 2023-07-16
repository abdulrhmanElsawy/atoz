import '../css/projectspage.css';


import { Link as RouterLink } from 'react-router-dom';

import React, { useState,useEffect } from 'react';
import OurServicesEn from './OurServicesEn';
import Logo from '../images/logo.png';

import imageSlide1 from '../images/landing2.jpg';



function ProjectPage(){


    return(
        <>

            <section  id="home" className="landing">
                <div className="overlay"></div> 
                    <div className="landing-content">
                            <img src={imageSlide1} alt="logo" />
                        <h1> Lamar salon services </h1>

                    </div>
            </section>




            <section className='projects-page'>
                <div className='container projects-page-content'>
                <div className='overlay'></div>

                    <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                            <div className='projects-page-about'>
                                <h3>About Lamar Salon</h3>
                                <h1>Quality and experience</h1>
                                <h1>  Available for service at any time! </h1>
                                <p>
                                    

                                We offer Arabic massage service at Lamar Massage Center, where we offer the best types of essential oils and natural herbs to enjoy complete comfort and relaxation. By providing the massage using long, soft strokes and small circular motions, we work to loosen muscle adhesions and promote blood circulation, which helps in achieving relaxation and calmness for you.

These traditional Czech movements cover a wide, general area of ​​the body with the goal of leaving the body relaxed and rejuvenated. We offer a unique massage experience that includes various touches that target tense areas and provide you with the comfort and rejuvenation you deserve.

Our service is characterized by professionalism and accuracy, as our trained team works honestly and skillfully to provide the highest levels of service.
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='projects-page-about'>
                                <div className='text'>
                                    <div className='overlay'></div>
                                    <h2> I am requesting your service now.</h2>

                                
                                
                                    <h4>  +971 551 199 242  </h4>
                                    <h4> lamar-salon@gmail.com   </h4>
                                    <h4>  Al Bada'a - Dubai - United Arab Emirates  </h4>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <OurServicesEn />

            </section>
        </>
    )
}

export default ProjectPage;