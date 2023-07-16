import './css/projectspage.css';


import { Link as RouterLink } from 'react-router-dom';

import React, { useState,useEffect } from 'react';
import OurServices from './OurServices';
import Logo from './images/logo.png';
import Navbar from './Navbar';
import imageSlide1 from './images/landing2.jpg';



function ProjectPage(){


    return(
        <>


        
<section  id="home" className="landing">
                <div className="overlay"></div> 
                    <div className="landing-content">
                            <img src={imageSlide1} alt="logo" />
                        <h1> خدمات صالون لامار </h1>

                    </div>
            </section>


            <section className='projects-page'>
                <div className='container projects-page-content'>
                <div className='overlay'></div>

                    <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                            <div className='projects-page-about'>
                                <h3>عن صالون لامار</h3>
                                <h1>الجودة والخبرة</h1>
                                <h1>  متاحين للخدمة في اي وقت !</h1>
                                <p>
                                    

                                نقدم خدمة المساج العربي في مركز لامار للمساج، حيث نقدم أفضل أنواع الزيوت الأساسية والأعشاب الطبيعية للاستمتاع بالراحة والاسترخاء الكامل. من خلال تقديم المساج باستخدام حركات طويلة وناعمة وحركات دائرية صغيرة، نعمل على تفكيك التصاقات العضلية وتعزيز الدورة الدموية، مما يساعد في تحقيق الاسترخاء والهدوء لديك.

                                تعمل هذه الحركات التشيكية التقليدية على تغطية مساحة واسعة وعامة من الجسم بهدف ترك الجسم مسترخيًا ومتجددًا. نحن نقدم تجربة مساج متميزة تتضمن لمسات متنوعة تستهدف المناطق المتوترة وتوفر لك الراحة والتجدد الذي تستحقه.



                                </p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='projects-page-about'>
                                <div className='text'>
                                    <div className='overlay'></div>
                                    <h2> أطلب خدمتك الان</h2>

                                
                                
                                    <h4>  +971 551 199 242  </h4>
                                    <h4> lamar-salon@gmail.com   </h4>
                                    <h4>  Al Bada'a - Dubai - United Arab Emirates  </h4>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <OurServices />

            </section>
        </>
    )
}

export default ProjectPage;