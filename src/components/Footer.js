import './css/footer.css';
import './css/ar.css';


import flowers from './images/st5.png';

function Footer(){

        
    const referrer = document.referrer; // Get the referrer URL

    // Check if the referrer URL matches the website URL
    const isFromWebsite = referrer.includes("/en");

    // Conditionally import CSS file
    if (isFromWebsite) {
        import("./css/ar.css");
        
    } 


    return(
        <>

            <footer>
                <img src={flowers} alt=''/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='footer-content'>
                                <h1>روابط سريعة </h1>

                                <a href="#home">
                                    الرئيسية
                                </a>

                                
                                <a href="#about">
                                معلومات عنا
                                </a>

                                
                                <a href="#service">
                                خدماتنا
                                </a>


                                <a href="https://www.threads.net/@lamar_house_369">
                                    Threads
                                </a>

                                <a href="https://www.tiktok.com/@lamarglamour?_t=8dqkV8JqVLV&_r=1">
                                    Tiktok
                                </a>

                                
                                <a href="#contact">
                                اتصل بنا
                                </a>

                            </div>
                        </div>


                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='footer-content'>
                                <h1> اتصل بنا</h1>

                                <a href="https://maps.app.goo.gl/QB3AJyb3kQUDX9G39">
                                البدع - دبي - الإمارات العربية المتحدة
                                </a>

                                
                                <a href="https://wa.me/+971551199242">
                                واتس اب
                                </a>

                                
                                <a href="tel:+971551199242">
                                    +971 551 199 242
                                </a>

                            </div>
                        </div>



                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='footer-content'>
                                <h1> ساعات العمل لدينا </h1>

                                <a href='#'>
                                24 ساعة في اليوم
                                </a>

                                
                                <a href='#'>
                                7 أيام في الأسبوع
                                </a>


                            </div>
                        </div>



                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='copy-right'>
                                <h1> &copy; 2023 - Lamar Spa Salon All Rights Reserved </h1>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;