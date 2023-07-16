import './css/aboutus.css';
import './css/ar.css';



function AboutUs(){

    return(
        <>

            <section  id="about" className='about-us'>
                <div className='container'>
                    <div className='about-content'>
                        <h1> جرب مثال الفخامة مع سبا فاخر ومساج وباث ريتريت في قلب دبي النابض بالحياة. </h1>

                        <h2> اكتشف مثال الراحة والاسترخاء في مركز التدليك والاسترخاء. </h2>

                        <div className='about-details'>
                            <div className='about'>
                                <i class="las la-spa"></i>
                                <div className='text'> 
                                    <h3>استرخِ واسترخي </h3>
                                    <h4> انغمس في الساعة المطلقة من النعيم النقي والاسترخاء! </h4>
                                </div>
                            </div>


                            <div className='about'>
                                <i class="fa-solid fa-person-running"></i>
                                <div className='text'> 
                                    <h3> عشاق الرياضة  </h3>
                                    <h4> ارتق برحلة السبا الخاصة بك مع تنشيط الانتعاش الرياضي والعافية. </h4>
                                </div>
                            </div>



                            <div className='about'>
                                <i class="las la-hand-holding-heart"></i>
                                <div className='text'> 
                                    <h3> علاج عطري مملح بالملح </h3>
                                    <h4> يتم نقع خلاصة فاكهة العرعر بدقة في الملح. </h4>
                                </div>
                            </div>


                        </div>


                        <div className="contact-us">
                            <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i> أرسل الرسالة الآن</a>
                            <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                        </div>
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;