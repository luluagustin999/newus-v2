import React from "react";
import bg from '../../assets/aboutUs/banner.png';
import Real from "../../components/Real";
import Team from "../../components/Team";
import Footer from "../../components/Footer";
import Top from "../../components/AboutUs/Top";
import Middle from "../../components/AboutUs/Middle";
import Bottom from "../../components/AboutUs/Bottom";
import BannerAboutUs from "../../components/AboutUs/BannerAboutUs";

const aboutUs = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <BannerAboutUs heading='About Us'img={bg}/>
      </section>

      {/* Top Section  */}
      <section>
        <Top />
      </section>

      {/* Team Section  */}
      <section>
        <Team />
      </section>

      {/* Middle Section  */}
      <section>
        <Middle />
      </section>

      {/* Bottom Section  */}
      <section>
        <Bottom />
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

export default aboutUs;