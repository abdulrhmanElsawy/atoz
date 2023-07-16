import './css/contactpage.css';
import React, { useState,useEffect } from 'react';
import Logo from './images/logo.png';
import Navbar from './Navbar';
import imageSlide1 from './images/landing4.jpg';




function ContactPage(){



    return(
        <>


            
<section  id="home" className="landing">
                <div className="overlay"></div> 
                    <div className="landing-content">
                            <img src={imageSlide1} alt="logo" />
                        <h1> تواصل معنا </h1>

                    </div>
            </section>



            <section className='contact-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='contact-page-content'>
                                <h1>
                                أرسل إلينا الان واحصل على الرد في اسرع وقت
                                </h1>

                                <p>
                                نقدم خدمة المساج العربي في مركز لامار للمساج، حيث نقدم أفضل أنواع الزيوت الأساسية والأعشاب الطبيعية للاستمتاع بالراحة والاسترخاء الكامل. من خلال تقديم المساج باستخدام حركات طويلة وناعمة وحركات دائرية صغيرة، نعمل على تفكيك التصاقات العضلية وتعزيز الدورة الدموية، مما يساعد في تحقيق الاسترخاء والهدوء لديك.


                                </p>

                                <div className='input'>
                                    <label> الاسم:  </label>
                                    <input
                                    type='text'
                                    name='name'
                                    />
                                </div>

                                <div className='input'>
                                    <label> البريد الالكتروني:  </label>
                                    <input
                                    type='email'
                                    name='email'
                                    />
                                </div>

                                <div className='input'>
                                    <label> الرسالة:  </label>
                                    <textarea
                                    name='message'
                                    ></textarea>
                                </div>

                                <button >أرسل الآن</button>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            
                            <div className='contact-page-content'>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.636384841458!2d55.259741299999995!3d25.2154821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4319d2f80f65%3A0xa07df1f63378a643!2sLAMAR%20SPA%20Massage!5e0!3m2!1sar!2seg!4v1688919111064!5m2!1sar!2seg" width="100%" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                <div className='contact-info'>

                                    <h2> <span className='data'> العنوان </span>  <span className='value'>Al Bidda - Dubai - United Arab Emirates </span></h2> 
                                    <h2> <span className='data'> الرقم  </span>  <span className='value'> +971 551 199 242 </span></h2> 
                                    <h2> <span className='data'> الدولة  </span>  <span className='value'> دبي </span></h2> 
                                    <h2> <span className='data'> البريد الالكتروني  </span>  <span className='value'> lamar-salon@gmail.com </span></h2> 

                                </div>

                                <h3>متاح من 10AM – 8PM</h3>

                                <h6> <a href="https://wa.me/+971551199242" target="_blank"> +971 551 199 242 </a> </h6> 
    
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage;