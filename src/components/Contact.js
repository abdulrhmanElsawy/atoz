import './css/contact.css';
import './css/ar.css';


import Insta from './images/insta.jpg';

function Contact(){

        
    const referrer = document.referrer; // Get the referrer URL

    // Check if the referrer URL matches the website URL
    const isFromWebsite = referrer.includes("/en");

    // Conditionally import CSS file
    if (isFromWebsite) {
        import("./css/ar.css");
        
    } 


    return(
        <>
            <div id="contact" className='contact-section'>
                <div className='container'>
                    <div className='row'>

                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='contact-text'>
                                <h1>انضم إلينا على TikTok للحصول على محتوى حصري </h1>
                                <h2> ابق على اتصال معنا </h2>

                                <a href="https://www.tiktok.com/@lamarglamour?_t=8dqkV8JqVLV&_r=1"> 
                                    <i className="fa-brands fa-tiktok tiktok"></i>
                                    تابعنا على TIKTOK
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className='contact-img'>
                                <img src={Insta} />
                            </div>
                        </div>


                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.636384841458!2d55.259741299999995!3d25.2154821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4319d2f80f65%3A0xa07df1f63378a643!2sLAMAR%20SPA%20Massage!5e0!3m2!1sar!2seg!4v1688919111064!5m2!1sar!2seg" width="100%" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;