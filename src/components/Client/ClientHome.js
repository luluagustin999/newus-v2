import React from "react";
import styles from './ClientHome.module.css';
import logo1 from '../../assets/home/clients.svg';

const ClientHome = () =>{
    return(
        <div style={{backgroundColor: '#FFFFFF'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
            <p className={styles.heading}>Our Happy Client</p>
            <img src={logo1} alt="" style={{width:"115%", margin:'-80px 0px 0px -75px'}}/>
            </div>
        </div>
    )
}
export default ClientHome;