import '../css/aboutus.css';


function AboutUs(){

    return(
        <>

            <section  id="about" className='about-us'>
                <div className='container'>
                    <div className='about-content'>
                        <h1> Experience the Epitome of Opulence with a Lavish Spa, Massage, and Bath Retreat nestled in the Vibrant Heart of Dubai. </h1>

                        <h2> Discover the epitome of comfort and relaxation at our renowned Arabic massage center and Moroccan bath oasis nestled in the vibrant heart of Al Barsha, Dubai. </h2>

                        <div className='about-details'>
                            <div className='about'>
                                <i class="las la-spa"></i>
                                <div className='text'> 
                                    <h3>Unwind and Unwindness </h3>
                                    <h4> Indulge in the Ultimate Hour of Pure Bliss and Relaxation!</h4>
                                </div>
                            </div>


                            <div className='about'>
                                <i class="fa-solid fa-person-running"></i>
                                <div className='text'> 
                                    <h3> Sports Enthusiast </h3>
                                    <h4> Elevate Your Spa Journey with Revitalizing Athletic Recovery and Wellness. </h4>
                                </div>
                            </div>



                            <div className='about'>
                                <i class="las la-hand-holding-heart"></i>
                                <div className='text'> 
                                    <h3> Salt-infused Aromatherapy Bliss </h3>
                                    <h4> Juniper fruit essence is delicately infused within the salt. </h4>
                                </div>
                            </div>


                        </div>


                        <div className="contact-us">
                            <a href="https://wa.me/+971551199242">  <i class="lab la-whatsapp"></i> Send Message Now</a>
                            <a href="tel:+971551199242"> <i class="las la-phone"></i>  </a>
                        </div>
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;