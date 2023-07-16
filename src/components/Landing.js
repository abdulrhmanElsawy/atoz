import "./css/landing.css";
import './css/ar.css';

import imageSlide1 from './images/landing.jpg';
import imageSlide2 from './images/landing2.jpg';
import imageSlide3 from './images/landing3.jpg';
import imageSlide4 from './images/landing4.jpg';

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

                            <h1> تجربة المساج العربي للاستمتاع بالراحة والاسترخاء الكامل </h1>

                            <h2> يقع في منطقة نابضة بالحياة في دبي </h2>

                            <div className="contact-us">
                                <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i> أرسل الرسالة الآن</a>
                                <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="landing-content">
                        <div className="overlay"></div> 
                        <img src={imageSlide2} alt="slideimage" />

                            <h1> تفكيك التصاقات العضلية وتعزيز الدورة الدموية: سر الاسترخاء والهدوء </h1>

                            <h2> تمتع بلمسات متخصصين ماهرين يضمنون تجربة مساج مليئة بالاهتمام والراحة</h2>

                            <div className="contact-us">
                                <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i> أرسل الرسالة الآن</a>
                                <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="landing-content">
                        <div className="overlay"></div> 
                        <img src={imageSlide3} alt="slideimage" />

                            <h1> لمسات متنوعة تجلب لك الراحة والتجدد: تجربة مساج متميز </h1>

                            <h2> استمتع بجلسة مساج فريدة تعمل على تجديد حيويتك الجسدية والذهنية. </h2>

                            <div className="contact-us">
                                <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i> أرسل الرسالة الآن</a>
                                <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                            </div>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className="landing-content">
                        <div className="overlay"></div> 
                        <img src={imageSlide4} alt="slideimage" />

                            <h1> المساج العربي في مركز لامار: استمتع بالزيوت الأساسية والأعشاب الطبيعية للاسترخاء والراحة الكاملة </h1>

                            <h2> تجربة مساج مريحة تساعدك على التخلص من التوتر واستعادة التوازن الداخلي</h2>

                            <div className="contact-us">
                                <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i> أرسل الرسالة الآن</a>
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