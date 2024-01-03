import React from "react";
import Banner from '../../components/Banner';
import ChoosingUs from "../../components/ChoosingUs";
import ServicesHome from "../../components/ServicesHome";
// import CaseStudy from "../../components/CaseStudy";
import Real from "../../components/Real";
import Footer from "../../components/Footer";
import AboutUsHome from "../../components/AboutUsHome";
import Testimonial from "../../components/Testimonial";
import BlogHome from "../../components/BlogHome";


const Home = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <Banner subHeading='Home /About Us' />
      </section>

      {/* About Us Section */}
      <section>
        <AboutUsHome />
      </section>

      {/* Why Choosing Us Section  */}
      <section>
        <ChoosingUs />
      </section>
      
      {/* Services Section  */}
      <section>
        <ServicesHome />
      </section>

      {/* Case Study Section 
      <section>
        <CaseStudy />
      </section> */}

      {/* Blog Home Section  */}
      <section>
        <BlogHome />
      </section>

      {/* Testimonial Section  */}
      <section>
        <Testimonial />
      </section>

      {/* Real Section  */}
      <section>
        <Real />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;