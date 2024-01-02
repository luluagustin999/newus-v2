import React from "react";
import styles from './Banner.module.css';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Banner = () => {

  return (
    <>
        <div className={styles.imgbox}>
            <div className={`${styles.center} overflow-hidden`}>
                <p className={styles.text}>What you need, we can make it happen.</p>
                <p className={styles.subtext} >Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig. Lörem ipsum astrobel sar direlig. Kronde est astrobel sar direlig. Lörem ipsum astrobel.</p>
                  <div style={{textAlign:'left'}}>
                    <button className={`btn custom_btn ${styles.btn}`}>Contact Us<HiOutlineArrowNarrowRight className={styles.to} style={{ transform: 'rotate(-45deg)'}}/></button>
                  </div>
            </div>
            
        </div>
        
    </>
  );
};

export default Banner;
