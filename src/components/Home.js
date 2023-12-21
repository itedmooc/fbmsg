import React from 'react'
import Header from "./Header";
import About from "./About";
import Project from "./About2";
import Step from "./Step";
import Calendar from "./Calendar";
import Contact from "./Contact";
import Footer from "./Footer";
import FacebookProvider from "./FBLive";
import ScrollToTop from './ScrollToTop';
import ScrollToTopBtn from './ScrollToTopBtn';

function Home() {
  return (
    <>
      <ScrollToTop />
      <ScrollToTopBtn />
      <Header />
      <Project />
      <About />
      <Step />
      <Calendar />
      <Contact />
      <Footer />
      <FacebookProvider />
    </>
  )
}

export default Home
