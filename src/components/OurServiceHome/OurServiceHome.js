import React from "react";
import styles from './OurServiceHome.module.css';
import img1 from '/Users/User/newus-v2/src/assets/home/service1.svg';
import img2 from '/Users/User/newus-v2/src/assets/home/service2.svg';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import img3 from '/Users/User/newus-v2/src/assets/home/service1.svg';

const OurServiceHome = () =>{
    return(
        <>
        <div style={{backgroundColor: '#E8E8E8', height:"600px", marginTop:'-150px'}}>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p className={styles.head}>Our Service</p>
                        <div>
                            <p className={styles.content}>With more than 5 years experience supporting 50+ customers, you can trust Newus Technology to deliver</p>
                        </div>
                        <div style={{textAlign: 'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`} style={{borderColor:'#1E4D98', width:"220px", height:"51px" }}> Learn More Service<HiOutlineArrowNarrowRight className={styles.to}/></button>
                        </div>
                        
                    </div>

                    <div className="col-md-6 mt-5 overflow-hidden">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1} ` }>
                                <img src={img1} alt="" style={{width:'110%', marginLeft:'-70px'}}/>
                            </div>
                            <div className={styles.column}>
                                <img src={img2} style={{width:'110%'}} alt=""/>
                                {/* <img src={img3} alt=""/> */}
                            </div>
    
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default OurServiceHome;