import '../css/footer.css';

import flowers from '../images/st5.png';

function Footer(){
    return(
        <>

            <footer>
                <img src={flowers} alt=''/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='footer-content'>
                                <h1> Fast Links </h1>

                                <a href="#home">
                                    Home
                                </a>

                                
                                <a href="#about">
                                    About Us
                                </a>

                                
                                <a href="#service">
                                    Our Services
                                </a>


                                <a href="https://www.threads.net/@lamar_house_369">
                                    Threads
                                </a>

                                <a href="https://www.tiktok.com/@lamarglamour?_t=8dqkV8JqVLV&_r=1">
                                    Tiktok
                                </a>

                                
                                <a href="#contact">
                                    Contact Us
                                </a>

                            </div>
                        </div>


                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='footer-content'>
                                <h1> Contact Us </h1>

                                <a href="https://maps.app.goo.gl/QB3AJyb3kQUDX9G39">
                                    Al Bidda - Dubai - United Arab Emirates
                                </a>

                                
                                <a href="https://wa.me/+971551199242">
                                    Whatsapp
                                </a>

                                
                                <a href="tel:+971551199242">
                                    +971 551 199 242
                                </a>

                            </div>
                        </div>



                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                            <div className='footer-content'>
                                <h1> Our Operating Hours </h1>

                                <a href='#'>
                                    24 Hours a Day
                                </a>

                                
                                <a href='#'>
                                    7 Days a Week
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