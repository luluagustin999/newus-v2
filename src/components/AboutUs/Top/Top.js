import React from "react";
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';

const Top =()=>{
    return(
        <div className={`container overflow-hidden`}>
            <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
            <div className={`col-md-6 ${styles.imgContain}`}>
                    <img src={img1} alt="" className={styles.img1}/>
                </div>
                <div className={`col-md-6`}>
                    <p className={styles.about}>Who We Are ?</p>
                    <p className={styles.contn}>“Newus Technology is astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est . Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est.”</p>
                    </div>
            </div>
        </div>
    )
}

export default Top;