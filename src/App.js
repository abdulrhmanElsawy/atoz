import './App.css';
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Landing from './components/Landing';
import Navbar from './components/Navbar';

import OurServices from './components/OurServices';

import Numbers from './components/Numbers';

import AboutUs from './components/AboutUs';

import Contact from './components/Contact';
import Footer from './components/Footer';




import LandingEn from './components/en/LandingEn';
import OurServicesEn from './components/en/OurServicesEn';

import NumbersEn from './components/en/NumbersEn';

import AboutUsEn from './components/en/AboutUsEn';

import ContactEn from './components/en/ContactEn';
import FooterEn from './components/en/FooterEn';
import AboutPage from './components/AboutPage';
import Gallery from './components/Gallery';
import ContactPage from './components/ContactPage';
import ProjectPage from './components/ProjectsPage';

import AboutPageEn from './components/en/AboutPageEn';
import GalleryEn from './components/en/GalleryEn';
import ContactPageEn from './components/en/ContactPageEn';
import ProjectPageEn from './components/en/ProjectsPageEn';
import NavbarEn from './components/en/NavbarEn';




function App() {

return (
    <div className="App">
            <Routes>
            

        
            <Route path="/en" element={
                <>
                <NavbarEn />
                
                <LandingEn />
                <OurServicesEn />
                <NumbersEn />

                <AboutUsEn />
                <ContactEn />
                <FooterEn />



                

                </>
            } />

            
        <Route path="/" element={
                <>
                <Navbar />

                <Landing />
                <OurServices />
                <Numbers />

                <AboutUs />
                <Contact />
                <Footer />

                </>
            } />



                
            <Route path="/about-us" element={
                <>
                <Navbar />

                <AboutPage />
                <Footer />

                </>
            } />

                
            <Route path="/gallery" element={
                <>
                <Navbar />

                <Gallery />
                <Footer />

                </>
            } />
            
                            
            <Route path="/contact-us" element={
                <>
                                <Navbar />

                <ContactPage />
                <Footer />

                </>
            } />


                
        <Route path="/services" element={
                        <>
                        <Navbar />

                        <ProjectPage />
                        <Footer />

                        </>
                    } />




                    

                
            <Route path="/about-us-en" element={
                <>
                <NavbarEn />

                <AboutPageEn />
                <FooterEn />

                </>
            } />

                
            <Route path="/gallery-en" element={
                <>
                <NavbarEn />
                <GalleryEn />
                <FooterEn />

                </>
            } />
            
                            
            <Route path="/contact-us-en" element={
                <>
                <NavbarEn />
                <ContactPageEn />
                <FooterEn />

                </>
            } />


                
        <Route path="/services-en" element={
                        <>
                        <NavbarEn />
                        <ProjectPageEn />
                        <FooterEn />

                        </>
                    } />



        </Routes>


        
    </div>
);
}

export default App;
