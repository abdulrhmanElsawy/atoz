import '../css/ourservices.css';
import '../css/ar.css';



import moroco1 from '../images/moroco1.jpg';
import moroco2 from '../images/moroco2.jpg';
import moroco3 from '../images/moroco3.jpg';


import steam1 from '../images/steam1.jpg';
import steam2 from '../images/sream2.jpg';
import steam3 from '../images/steam3.jpg';


import massa1 from '../images/massa1.jpg';
import massa2 from '../images/massa2.jpg';
import massa3 from '../images/massa3.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,EffectCube, Pagination } from 'swiper';





function OurServices(){

        
    const referrer = document.referrer; // Get the referrer URL

    // Check if the referrer URL matches the website URL
    const isFromWebsite = referrer.includes("/en");

    // Conditionally import CSS file
    if (isFromWebsite) {
        import("../css/ar.css");
        
    } 


    return(

        <>


        <section id="service" className='our-services'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div className='section-header'>
                            <h1> Discover our range of services and exclusive offers</h1>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <div className='service'>

                        <Swiper
                            effect={'cube'}
                            grabCursor={true}
                            cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                            }}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={true}
                            modules={[Autoplay,EffectCube, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                            <img src={massa1} alt='serviceImg'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={massa2} alt='serviceImg'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={massa3} alt='serviceImg'/>
                            </SwiperSlide>
                            
                        </Swiper>

                            <div className='details'>
                                <h1> Arabic massage </h1>
                                <p> 
                                We offer an Arabic massage service that relaxes the body, gives you calmness, and relieves stress and fatigue
                                                                </p>

                                <div className="contact-us">
                                    <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i>Send message now</a>
                                    <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <div className='service'>
                        <Swiper
                            effect={'cube'}
                            grabCursor={true}
                            cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                            }}
                            
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={true}
                            modules={[Autoplay,EffectCube, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                            <img src={steam1} alt='serviceImg'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={steam2} alt='serviceImg'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={steam3} alt='serviceImg'/>
                            </SwiperSlide>
                            
                        </Swiper>

                            <div className='details'>
                                <h1> steam bath</h1>
                                <p>Regular saunas strengthen the immune system, regulate stress hormones, and strengthen the heart and blood vessels.</p>
                                <div className="contact-us">
                                    <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i> Send message now</a>
                                    <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                        <div className='service'>
                        <Swiper
                            effect={'cube'}
                            grabCursor={true}
                            cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                            }}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={true}
                            modules={[Autoplay,EffectCube, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                            <img src={moroco1} alt='serviceImg'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={moroco2} alt='serviceImg'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={moroco3} alt='serviceImg'/>
                            </SwiperSlide>
                            
                        </Swiper>

                            <div className='details'>
                                <h1> Moroccan Bath</h1>

                                <p> 
                                The Moroccan bath is the approved method of exfoliation that helps you get rid of dead skin cells leaving your skin smooth.
                                </p>

                                <div className="contact-us">
                                    <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i>Send message now</a>
                                    <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
        
        </>
    )
}

export default OurServices;