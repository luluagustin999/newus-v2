import React from "react";
import styles from './ClientHome.module.css';
import logo1 from '/Users/User/newus-v2/src/assets/home/clients.svg';

const BlogHome = () =>{
    return(
        <div style={{backgroundColor: '#FFFFFF'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
            <p className={styles.heading}>Our Happy Client</p>
            <img src={logo1} alt="" style={{marginLeft:'-80px'}}/>
            </div>
        </div>
    )
}
export default BlogHome;