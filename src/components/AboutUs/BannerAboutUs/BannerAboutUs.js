import React from "react";
import styles from './BannerAboutUs.module.css';

const BannerAboutUs = ({heading, subHeading, img}) => {

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

export default BannerAboutUs;
