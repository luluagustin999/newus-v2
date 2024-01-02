import React from "react";
import SubBanner from '../../components/SubBanner';
import Services from '../../components/Services';
import Real from "../../components/Real";
import Footer from "../../components/Footer";
import bg from '../../assets/banner.svg';

const ServicesHome = () => {

  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='SERVICE' img={bg}/>
      </section>

      {/* Services Section  */}
      <section>
        <Services/>
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

export default ServicesHome;