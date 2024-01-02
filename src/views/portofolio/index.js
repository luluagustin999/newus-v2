import React from "react";
import bg from '../../assets/banner1.svg';
import bg1 from '../../assets/banner1.svg';
import SubBanner from '../../components/SubBanner';
import Footer from "../../components/Footer";
import Top from "../../components/Portofolio/Top";
import Bottom from "../../components/Portofolio/Bottom";
import Real from "../../components/Real";

const  portofolio = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <SubBanner heading=' 'img={bg}/>
      </section>

      {/* Top Section  */}
      <section>
        <Top heading=' 'img={bg1} />
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

export default portofolio;