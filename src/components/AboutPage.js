import './css/aboutpage.css';
import { Link as RouterLink } from 'react-router-dom';


import Video1 from './videos/1.mp4';
import Video2 from './videos/2.mp4';
import Video3 from './videos/3.mp4';
import Logo from './images/logo.png';





import imageSlide1 from './images/landing.jpg';

import Service1 from './images/1.jpeg';
import Service2 from './images/16.jpeg';
import Service3 from './images/19.jpeg';
import Service4 from './images/14.jpeg';
import Service5 from './images/12.jpeg';
import Service6 from './images/8.jpeg';

import Numbers from './Numbers';
import OurServices from './OurServices';
import Navbar from './Navbar';




function AboutPage(){


    return(
        <>

        
            <section  id="home" className="landing">
                <div className="overlay"></div> 
                    <div className="landing-content">
                            <img src={imageSlide1} alt="logo" />
                        <h1> عن صالون لامار </h1>

                    </div>
            </section>

            <div className='about-page-team'>
                <div className='container'>
                    <div className='row'>


                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='team-member'>
                                <video controls src={Video1} alt="team-mem"></video>
                                

                                <a href="https://wa.me/+971551199242"> تواصل معنا </a>
                            </div>
                        </div>



                        
                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='team-member'>
                                <video controls src={Video2} alt="team-mem"></video>
                                

                                <a href="https://wa.me/+971551199242"> تواصل معنا </a>
                            </div>
                        </div>




                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='team-member'>
                                <video controls src={Video3} alt="team-mem"></video>
                                

                                <a href="https://wa.me/+971551199242"> تواصل معنا </a>
                            </div>
                        </div>






                    </div>
                </div>
            </div> 


                <div className='about-page-info'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                <div className='info-content'>
                                    <div className='company-contact-info'>
                                        <div className='overlay'></div>

                                        <h1> عن الشركة </h1>

                                        
                                        <h2>  +971551199242 </h2> 

                                        <h2>  lamar-salon@gmail.com  </h2> 

                                        <h2> Al Bada'a - Dubai - United Arab Emirates </h2> 

                                    </div>


                                    <div className='company-open-times'>
                                        <div className='overlay'></div>

                                        <h1>مواعيد العمل</h1>
                                        <h2><span> SUN </span>  <span> 12:00 Pm to 05:00 Am </span></h2>
                                        <h2><span> MON </span>  <span> 12:00 Pm to 05:00 Am </span></h2>
                                        <h2><span> TUE </span>  <span> 	12:00 Pm to 05:00 Am </span></h2>
                                        <h2><span> WED </span>  <span>12:00 Pm to 05:00 Am </span></h2>
                                        <h2><span> THU </span>  <span> 12:00 Pm to 05:00 Am </span></h2>
                                        <h2><span> FRI </span>  <span> 12:00 Pm to 05:00 Am </span></h2>
                                        <h2><span> SAT </span>  <span> 12:00 Pm to 05:00 Am </span></h2>


                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                <div className='promotions'>
                                    <div className='overlay'></div>
                                    <h2>منطقة نابضة  </h2>
                                    <h1>يقع في منطقة نابضة بالحياة في دبي </h1>

                                    <a href='https://wa.me/+971551199242'> اطلب معلومات </a>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                <div className='custom'>
                                    <div className='overlay'></div>
                                    <h2>مخصص</h2>
                                    <h1> خدمات مخصصة لراحتك فقط </h1>

                                    <a href='https://wa.me/+971551199242'>اطلب معلومات</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Numbers />

                <div className='all-services'>
                    <div className='container'>
                        <div className='row'>
                            <h2>التخصيص</h2>
                            <h1>خدماتنا</h1>

                        
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='service-content'>
                                    <div className='left'>
                                        <img src={Service1}/>
                                        <div className='info'>
                                            <h3>تدليك عربي</h3>
                                            <h4> انغمس في نعيم تدليك عربي أصيل لكامل الجسم </h4>
                                        </div>
                                        
                                    </div>

                                    <div className='right'>
                                        <span> جديد </span>
                                    </div>
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='service-content'>
                                    <div className='left'>
                                        <img src={Service2}/>
                                        <div className='info'>
                                            <h3>الحمام المغربي</h3>
                                            <h4> انغمس في فخامة تجربة الحمام المغربي الرائعة مع تنظيف الوجه </h4>
                                        </div>
                                        
                                    </div>

                                    <div className='right'>
                                        <span> جديد </span>
                                    </div>
                                </div>
                            </div>


                            
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='service-content'>
                                    <div className='left'>
                                        <img src={Service3}/>
                                        <div className='info'>
                                            <h3>باديكير ومانيكير</h3>
                                            <h4> استمتع بجلسة تدليك لمدة ساعة مع باديكير ومانيكير </h4>
                                        </div>
                                        
                                    </div>

                                    <div className='right'>
                                        <span> جديد </span>
                                    </div>
                                </div>
                            </div>



                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='service-content'>
                                    <div className='left'>
                                        <img src={Service4}/>
                                        <div className='info'>
                                            <h3>الاسترخاء المطلق</h3>
                                            <h4>جرب الاسترخاء المطلق مع باقة حمام مغربي لمدة ساعتين تشمل المساج وتنظيف الوجه  </h4>
                                        </div>
                                        
                                    </div>

                                    <div className='right'>
                                        <span> جديد </span>
                                    </div>
                                </div>
                            </div>

                            
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='service-content'>
                                    <div className='left'>
                                        <img src={Service5}/>
                                        <div className='info'>
                                            <h3>الحمام المغربي</h3>
                                            <h4>انغمس في تجربة الحمام المغربي الفاخرة مع تنظيف الوجه ، والباديكير ، وعلاجات المانيكير   </h4>
                                        </div>
                                        
                                    </div>

                                    <div className='right'>
                                        <span> جديد </span>
                                    </div>
                                </div>
                            </div>


                            
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='service-content'>
                                    <div className='left'>
                                        <img src={Service6}/>
                                        <div className='info'>
                                            <h3>رحلة ملكية</h3>
                                            <h4>انطلق في رحلة ملكية مع باقة ملكية لمدة ساعة تشمل باديكير ومانيكير ديلييتس    </h4>
                                        </div>
                                        
                                    </div>

                                    <div className='right'>
                                        <span> جديد </span>
                                    </div>
                                </div>
                            </div>



                            <div className='col-lg-12 col-sm-12 col-md-12 col-xs-12'>
                                <div className='contact-us-now'>
                                    <div className='overlay'></div>
                                    <div className='left'>
                                        <i class="las la-headset"></i>
                                        <div className='info'>
                                                                
                                        
                                            
                                            <h1> لحجز المواعيد <span> +971551199242 </span> </h1> 
                                        
                                        </div>
                                    </div>

                                    <div className='right'>

                
                                            
                                            <a href="https://wa.me/+971551199242">تواصل الان</a> 
                                            
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



        </>
    )
}

export default AboutPage;