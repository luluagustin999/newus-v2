import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/middle1.svg';
import logo2 from '../../../assets/aboutUs/middle2.svg';
import logo3 from '../../../assets/aboutUs/middle3.svg';

const Middle = () =>{
    return(
        <div style={{backgroundColor: '#FFFFFF'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>

                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo1} alt=""/>
                            <p className={styles.head}>Web Design</p>
                            <p className={styles.content}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo2} alt=""/>
                            <p className={styles.head}>Web Design</p>
                            <p className={styles.content}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo3} alt=""/>
                            <p className={styles.head}>Web Design</p>
                            <p className={styles.content}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Middle;