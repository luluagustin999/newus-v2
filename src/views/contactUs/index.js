import React from "react";
import ContactUsForm from "../../components/ContactUsForm";
import Footer from "../../components/Footer";
import BannerContactUs from "../../components/ContactUsForm/BannerContactUs";
import bg from '../../assets/subBanner.jpg';

const ServicesHome = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <BannerContactUs heading='Contact Us' img={bg}/>
      </section>

      {/* Form Section  */}
      <section>
        <ContactUsForm />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default ServicesHome;