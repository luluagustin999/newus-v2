import React from "react";
import bg from '../../assets/banner1.png';
import SubBanner from '../../components/SubBanner';
import Footer from "../../components/Footer";
import Top from "../../components/Portofolio/Top";
import Middle from "../../components/Portofolio/Middle";
import Bottom from "../../components/Portofolio/Bottom";

const  portofolio = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='Portofolio'img={bg}/>
      </section>

      {/* Top Section  */}
      <section>
        <Top />
      </section>

      {/* Middle Section  */}
      <section>
        <Middle />
      </section>

      {/* Bottom Section  */}
      <section>
        <Bottom />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default portofolio;