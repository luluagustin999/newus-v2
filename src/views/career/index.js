import React from "react";
import bg from '../../assets/aboutUs/banner.png';
import SubBanner from '../../components/SubBanner';
import Footer from "../../components/Footer";
import Top from "../../components/Career/Top";
import Middle from "../../components/Career/Middle";
import Bottom from "../../components/Career/Bottom";

const career = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='Career'img={bg}/>
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

export default career;