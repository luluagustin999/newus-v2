import React from "react";
import styles from './BannerContactUs.module.css';

const BannerContactUs = ({heading, subHeading, img}) => {

  return (
    <>
        <div className={`${styles.imgbox} overflow-hidden`} style={{backgroundImage: `url(${img})`}}>
            <div className={styles.center}>
                <p className={styles.head}>{heading}</p>
                <p className={styles.subHead}>{subHeading}</p>
            </div>
        </div>
        
    </>
  );
};

export default BannerContactUs;
