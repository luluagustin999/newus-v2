import React from "react";
import Banner from '../../components/Banner';
// import ChoosingUs from "../../components/ChoosingUs";
// import CaseStudy from "../../components/CaseStudy";
import Real from "../../components/Real";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Testimonial";
import BlogHome from "../../components/BlogHome";
import OurServiceHome from "../../components/OurServiceHome";
import OurProjectHome from "../../components/OurProjectHome";
import ClientHome from "../../components/Client";


const Home = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <Banner subHeading='Home /About Us' />
      </section>

      {/* Why Choosing Us Section 
      <section>
        <ChoosingUs />
      </section>
      
      {/* Client Section  */}
      <section>
        <ClientHome />
      </section> 

      {/* Our Project Section  */}
      <section>
        <OurProjectHome />
      </section> 
      
      {/* Our Services Section  */}
      <section>
        <OurServiceHome />
      </section>

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