import '../css/contactpage.css';
import React, { useState,useEffect } from 'react';
import Logo from '../images/logo.png';
import imageSlide1 from '../images/landing4.jpg';




function ContactPage(){



    return(
        <>


            <section  id="home" className="landing">
                <div className="overlay"></div> 
                    <div className="landing-content">
                            <img src={imageSlide1} alt="logo" />
                        <h1>Connect with us </h1>

                    </div>
            </section>



            <section className='contact-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='contact-page-content'>
                                <h1>
                                Email us now and get a response as soon as possible
                                </h1>

                                <p>
                                We offer Arabic massage service at Lamar Massage Center, where we offer the best types of essential oils and natural herbs to enjoy complete comfort and relaxation. By providing the massage using long, soft strokes and small circular motions, we work to loosen muscle adhesions and promote blood circulation, which helps in achieving relaxation and calmness for you.
                                </p>

                                <div className='input'>
                                    <label> the name:  </label>
                                    <input
                                    type='text'
                                    name='name'
                                    />
                                </div>

                                <div className='input'>
                                    <label>E-mail:  </label>
                                    <input
                                    type='email'
                                    name='email'
                                    />
                                </div>

                                <div className='input'>
                                    <label> the message:  </label>
                                    <textarea
                                    name='message'
                                    ></textarea>
                                </div>

                                <button >Send now</button>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            
                            <div className='contact-page-content'>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.636384841458!2d55.259741299999995!3d25.2154821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4319d2f80f65%3A0xa07df1f63378a643!2sLAMAR%20SPA%20Massage!5e0!3m2!1sar!2seg!4v1688919111064!5m2!1sar!2seg" width="100%" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                <div className='contact-info'>

                                    <h2> <span className='data'> the address </span>  <span className='value'>البدع - دبي - الإمارات العربية المتحدة </span></h2> 
                                    <h2> <span className='data'> the number  </span>  <span className='value'> +971 551 199 242 </span></h2> 
                                    <h2> <span className='data'> Country  </span>  <span className='value'> دبي </span></h2> 
                                    <h2> <span className='data'> E-mail </span>  <span className='value'> lamar-salon@gmail.com </span></h2> 

                                </div>

                                <h3>Available from 10AM – 8PM</h3>

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