import React from "react";
import bg from '../../assets/career/banner.svg';
import BannerCareer from "../../components/Career/BannerCareer";
import Footer from "../../components/Footer";
import JobRecruitment from "../../components/Career/JobRecruitment";
import Middle from "../../components/Career/Middle";
import Bottom from "../../components/Career/Bottom";
import Real from "../../components/Real";


const career = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <BannerCareer heading='Be part of our mission.' img={bg} subHeading='Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig. Lörem
ipsum astrobel sar direlig. Kronde est astrobel sar direlig. Lörem ipsum astrobel'/>
      </section>

      {/* Top Section  */}
      <section>
        <JobRecruitment />
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

export default career;