import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/middle1.svg';
import logo2 from '../../../assets/aboutUs/middle2.svg';
import logo3 from '../../../assets/aboutUs/middle3.svg';
import logo4 from '../../../assets/aboutUs/middle4.svg';
import vector from '../../../assets/aboutUs/vector.svg';


const Middle = () =>{
    return(
        <div style={{backgroundColor: '#F4F4F4'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                <p className={styles.mainHead}>Our History</p>
                <p className={styles.mainContent}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig Terabel</p>

                <div className="row">
                    <div className="col-md-2">
                        <div className={styles.box}>
                            <p className={styles.head}>2018 - 2019</p>
                            <img src={vector} alt=""/>
                            <img src={logo1} alt=""/>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className={styles.box}>
                            <p className={styles.head}>2020</p>
                            <img src={vector} alt=""/>
                            <img src={logo2} alt=""/>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className={styles.box}>
                            <p className={styles.head}>2021</p>
                            <img src={vector} alt=""/>
                            <img src={logo3} alt=""/>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className={styles.box}>
                            <p className={styles.head}>2022</p>
                            <img src={vector} alt=""/>
                            <img src={logo1} alt=""/>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className={styles.box}>
                            <p className={styles.head}>2023</p>
                            <img src={vector} alt=""/>
                            <img src={logo4} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Middle;