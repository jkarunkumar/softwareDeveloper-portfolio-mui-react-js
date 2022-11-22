import React,{useRef,createRef} from 'react';
import Navbar from './Navbar';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Timeline from './Timeline';
import Expertise from './Expertise';
import Contact from './Contact';
import Footer from './Footer';
import {Element } from 'react-scroll'
const Home = () => {
    return (
        <React.Fragment>
            
            <Navbar/>
            <Header/>
            <AboutMe/>
            <Element name="timeline" className="element"><Timeline /></Element>
            <Element name="projects" className="element"><Projects  /></Element>
            <Element name="expertise" className="element"><Expertise/></Element>
            <Element name="contact" className="element"><Contact  /></Element>
            <Footer  id="footer"/>
       </React.Fragment>
    );
};

export default Home;