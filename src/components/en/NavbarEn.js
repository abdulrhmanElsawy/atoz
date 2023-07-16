import '../css/navbar.css';
import { useEffect,useRef  } from "react";
import $ from 'jquery';

import Logo from '../images/logo.png';
import { Link as RouterLink } from 'react-router-dom';


function Navbar(props){
    

    useEffect(() => {
        $("#open-nav").on("click", function() {
            $(".nav-elements").slideDown(400);
            $(".nav-elements").css({display: "flex"});
        });

        $("#close-nav").on("click", function() {
            $(".nav-elements").slideUp(400);
        });

        if ($(window).width() < 950) {
            $(".nav-elements ul li").on("click", function() {
                $(".nav-elements").slideUp(400);
            });
        }
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
        loadingElement.remove();
    }
    }, []);
    



    return(
        <>
            <nav className={`${props.className}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='nav-content'>
                            <div className='logo'>
                                <img src={Logo} alt="logo"/>
                            </div>

                        <button id="open-nav"> <i className="las la-bars"></i> </button>
                        <div className="nav-elements">
                        <button id="close-nav"> <i className="las la-times"></i> </button>
                                <ul>
                                <li> 
                                    <RouterLink to="/en">
                                        Home
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/about-us-en">
                                    About us
                                    </RouterLink>
                                </li>

                                <li>
                                    <RouterLink to="/gallery-en">
                                    Gallery
                                    </RouterLink>
                                </li>

                                <li>
                                    <RouterLink to="/services-en">
                                        Services
                                    </RouterLink>
                                </li>


                                <li>
                                    <RouterLink to="/contact-us-en">
                                    Contact Us
                                    </RouterLink>
                                </li>

                                <li>
                                    <RouterLink to="/">
                                        العربية <i class="las la-globe"></i>
                                    </RouterLink>
                                </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )   
}

export default Navbar;