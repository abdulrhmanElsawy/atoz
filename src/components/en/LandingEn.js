import "../css/landing.css";
import '../css/ar.css';

import imageSlide1 from '../images/landing.jpg';
import imageSlide2 from '../images/landing2.jpg';
import imageSlide3 from '../images/landing3.jpg';
import imageSlide4 from '../images/landing4.jpg';

import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Autoplay,EffectCoverflow,Navigation,Pagination} from 'swiper';



function Landing (){




    return(

        <>

            <section  id="home" className="landing">


                <Swiper effect={'coverflow'} centeredSlides={true} grabCursor={true} spaceBetween={50} slidesPerView={1} navigation ={true} pagination={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay,EffectCoverflow,Navigation,Pagination]}
                    >
                    <SwiperSlide>
                        <div className="landing-content">

                        <div className="overlay"></div> 
                        <img src={imageSlide1} alt="slideimage" />

                            <h1>Arabic massage experience to enjoy complete comfort and relaxation</h1>

                            <h2> It is located in a vibrant area of ​​Dubai</h2>

                            <div className="contact-us">
                                <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i> Send message now</a>
                                <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="landing-content">
                        <div className="overlay"></div> 
                        <img src={imageSlide2} alt="slideimage" />

                            <h1> Breaking down muscle adhesions and boosting blood circulation: the secret to relaxation and calmness</h1>

                            <h2>Enjoy the touches of skilled professionals who guarantee a massage experience full of attention and comfort</h2>

                            <div className="contact-us">
                                <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i>Send message now</a>
                                <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="landing-content">
                        <div className="overlay"></div> 
                        <img src={imageSlide3} alt="slideimage" />

                            <h1> Various touches that bring you comfort and rejuvenation: a unique massage experience</h1>

                            <h2> Enjoy a unique massage session that rejuvenates your physical and mental vitality. </h2>

                            <div className="contact-us">
                                <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i>Send message now</a>
                                <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                            </div>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className="landing-content">
                        <div className="overlay"></div> 
                        <img src={imageSlide4} alt="slideimage" />

                            <h1>Arabic Massage at Lamar Center: Enjoy essential oils and natural herbs for complete relaxation and comfort</h1>

                            <h2>A relaxing massage experience that helps you de-stress and restore inner balance.</h2>

                            <div className="contact-us">
                                <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i> Send message now</a>
                                <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            


            </section>
        
        </>
    )
    
}

export default Landing;