import React from "react";
import styles from './Real.module.css';
import improveImg from '../../assets/home/improves.png';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const Real = () =>{
    return(
        <div className="mb-6 overflow-hidden" style={{backgroundColor:'#1E4D98', padding:'50px', fontFamily:'Inter'}}>
            <div className="row g-0">
                
                <div className="col-md-6">
                    <div className={styles.text}>
                        <p className={styles.heading}>Loving what you’re seeing so far ?</p>
                        <p className={styles.content}>It doesnn’t have to be a project. Questions or love letters are fine. Drop us line. </p>
                        <div style={{textAlign:'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}>Let&apos;s Talk <HiOutlineArrowNarrowRight className={styles.to}/></button>
                        </div>
                    </div>
                </div>
                <div className={`col-md-6 ${styles.imgDiv}`}>
                    <img src={improveImg} alt="" className={styles.img}/>
                </div>
            </div>
        </div>
    )
}
export default Real;