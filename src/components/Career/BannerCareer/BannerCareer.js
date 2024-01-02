import React from "react";
import styles from './BannerCareer.module.css';

const BannerCareer = ({heading, subHeading, img}) => {

  return (
    <>
        <div className={`${styles.imgbox} overflow-hidden`} style={{backgroundImage: `url(${img})`}}>
            <div className={styles.center}>
                <p className={styles.banner}>Were Hiring !</p>
                <p className={styles.head}>{heading}</p>
                <p className={styles.subHead}>{subHeading}</p>
            </div>
        </div>
        
    </>
  );
};

export default BannerCareer;
