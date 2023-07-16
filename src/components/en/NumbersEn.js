import '../css/numbers.css';


function Numbers(){
    return(
        <>
        
            <section className='numbers-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='text'>
                            <h2> Lamar Salon </h2>

                            <h1> Step into a Haven of Relaxation and Wellness at Our Spa Center </h1>


                            <p> Set across two levels, our exquisite spa provides a tranquil ambiance where you can unwind, rejuvenate, and experience complete serenity. </p>

                            <div className='numbers-details'>
                                <div className='detail'>
                                    <i class="las la-smile-beam"></i>
                                    <div className='number'>
                                        <h3> 458 +  </h3>
                                        <h4> HAPPY CLIENTS </h4>
                                    </div>
                                </div>

                                <div className='detail'>
                                    <i class="las la-award"></i>
                                    <div className='number'>
                                        <h3> 698 +  </h3>
                                        <h4> WIN AWARDS </h4>
                                    </div>
                                </div>

                                <div className='detail'>
                                    <i class="las la-users"></i>
                                    <div className='number'>
                                        <h3> 894 +  </h3>
                                        <h4> OUR TRAINER </h4>
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

export default Numbers;