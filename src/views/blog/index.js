import React from "react";
import bg from '../../assets/banner.svg';
import SubBanner from '../../components/SubBanner';
import Real from "../../components/Real";
import Footer from "../../components/Footer";
import Top from "../../components/Blog/Top";
import Middle from "../../components/Blog/Middle";
import Bottom from "../../components/Blog/Bottom";

const blog = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading='BLOG'img={bg}/>
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

export default blog;