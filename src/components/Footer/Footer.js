import React from "react";
import styles from './Footer.module.css';
import fb from '../../assets/footer/facebook.svg';
import twt from '../../assets/footer/twitter.svg';
import linkdin from '../../assets/footer/linked.svg';
import ytb from '../../assets/footer/youtube color.1.svg';
import insta from '../../assets/footer/instagram.svg';
import google from '../../assets/footer/googleplus.svg';
import pint from '../../assets/footer/pinterest.svg';
import rss from '../../assets/footer/rss black.1.svg';
import logo from '../../assets/logo.svg';

const Footer = () =>{
    return (
        <>
            <div className={styles.imgbox}>
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                        <img src={logo} alt="" style={{marginLeft:'100px', marginTop:'100px'}}/>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.text} style={{width:'500px', marginLeft:'300px', marginTop:'110px', marginBottom:'20px'}}>Newus Technology, Jl. In aja dulu, No 212 Lintang Barat</p>
                            <p className={styles.text} style={{width:'500px', marginLeft:'300px'}}>(+62) 888-991-2992</p>
                            <p className={styles.text} style={{marginLeft:'300px', marginTop:'20px'}}>newustech@gmail.com</p>
                        </div>
                        <div className={`col-lg-3 col-sm-6 ${styles.social_logo}`}>
                                <img src={fb} alt="fb" className={styles.img}/>
                                <img src={twt} alt="twt" className={styles.img}/>
                                <img src={linkdin} alt="in" className={styles.img}/>
                                <img src={ytb} alt="ytb" className={styles.img}/>
                                <img src={insta} alt="insta" className={styles.img}/>
                                <img src={google} alt="google" className={styles.img}/>
                                <img src={pint} alt="pint" className={styles.img}/>
                                <img src={rss} alt="rss" className={styles.img}/>
                        </div>

                        <div className="row" style={{borderTop: 'solid 1px #F2F2F2', marginTop:'90px'}}>
                            <div className="col-md-2" style={{width:'300px'}}>
                                <p className={styles.bottom}>SERVICE</p>
                            </div>
                            
                            <div className="col-md-2" style={{marginLeft:'-150px'}}>
                                <p className={styles.bottom}>PORTOFOLIO</p>
                            </div>
                            
                            <div className="col-md-2" style={{marginLeft:'-120px'}}>
                                <p className={styles.bottom}>BLOG</p>
                            </div>
                            
                            <div className="col-md-2" style={{marginLeft:'-140px'}}>
                                <p className={styles.bottom}>ABOUT</p>
                            </div>
                            
                            <div className="col-md-2" style={{marginLeft:'-130px'}}>
                                <p className={styles.bottom}>CAREER</p>
                            </div>
                            <div className="col-md-2" style={{marginLeft:'-120px'}}>
                                <p className={styles.bottom}>CONTACT</p>
                            </div>
                            <div className="col-md-2" style={{marginLeft:'70px', width:'500px'}}>
                                <p className={styles.bottom}>Copyright © 2023 • Newus Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}
export default Footer;