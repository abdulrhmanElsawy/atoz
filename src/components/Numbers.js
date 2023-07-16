import './css/numbers.css';
import './css/ar.css';



function Numbers(){

        
    const referrer = document.referrer; // Get the referrer URL

    // Check if the referrer URL matches the website URL
    const isFromWebsite = referrer.includes("/en");

    // Conditionally import CSS file
    if (isFromWebsite) {
        import("./css/ar.css");
        
    } 



    return(
        <>
        
            <section className='numbers-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='text'>
                            <h2> صالون لامار </h2>

                            <h1> ادخل إلى ملاذ من الاسترخاء والعافية في مركز السبا الخاص بنا </h1>


                            <p> يقع المنتجع الصحي الرائع على مستويين ، ويوفر أجواءً هادئة حيث يمكنك الاسترخاء وتجديد شبابك وتجربة الصفاء التام. </p>

                            <div className='numbers-details'>
                                <div className='detail'>
                                    <i class="las la-smile-beam"></i>
                                    <div className='number'>
                                        <h3> 458 +  </h3>
                                        <h4> عملاء سعداء </h4>
                                    </div>
                                </div>

                                <div className='detail'>
                                    <i class="las la-award"></i>
                                    <div className='number'>
                                        <h3> 698 +  </h3>
                                        <h4> اربح جوائز </h4>
                                    </div>
                                </div>

                                <div className='detail'>
                                    <i class="las la-users"></i>
                                    <div className='number'>
                                        <h3> 894 +  </h3>
                                        <h4> مدربنا </h4>
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