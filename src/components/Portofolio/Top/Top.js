import React from "react";
import styles from './Top.module.css';
// import img1 from '../../../assets/aboutUs/img1.png';
// import img2 from '../../../assets/aboutUs/img2.png';

const Top =()=>{
    return(

        
        <div className={`container overflow-hidden`} style={{backgroundColor:"#FFFFFF", borderRadius:"20px", marginTop:"-90px", width:"680px"}}>
            <p className={styles.subHeading}>PORTOFOLIO</p>
            <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig. Lörem ipsum astrobel sar direlig. Kronde es</p>
        </div>
    )
}

export default Top;