import React, { useState } from "react";
import styles from './ContactUsForm.module.css';
import contact from '/Users/User/miritus/src/assets/contactUs.svg';
// import {Map, GoogleApiWrapper} from 'google-maps-react';

const ContactUsForm = () =>{
    const [formContent, setFormContent ] = useState({});

    const handleChange = ( event ) =>{
        const { value, name } = event.target;

        setFormContent(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    return(
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                <p className={styles.heading}>Get In Touch</p>
                <p className={styles.head}>Do you really think graphic arts supply houses were hiring classics scholars</p>
                <div className="row">
                <div className={`col-md-6 ${styles.imgContain}`}>
                    <img src={contact} alt="" className={styles.img1}/>
                </div>
                    <div className="col-md-6" style={{textAlign: 'left'}}>
                        <label className={styles.label}>Name</label><br/>
                        <input name="name" value={formContent.name} onChange={handleChange} className={styles.input} type="text" />

                        <label className={styles.label}>Email</label><br/>
                        <input name="email" value={formContent.email} onChange={handleChange} className={styles.input} type="email" />

                        <label className={styles.label}>Subject</label><br/>
                        <input name="subject" value={formContent.subject} onChange={handleChange} className={styles.input} type="text" />
                    </div>
                    <div className="col-md-6" style={{textAlign: 'left'}}>
                        <label className={styles.label}>Message</label><br/>
                        <textarea name="message" value={formContent.message} onChange={handleChange} className={`${styles.input} ${styles.msg}`} type="text"/>
                        <div style={{textAlign:'right'}}>
                            <button className={`btn custom_btn ${styles.btn}`}>SEND</button>
                        </div>
                    </div>
                    <div className="row">
                    <div className={`col-md-6 ${styles.content}`}>
                            <p className="">Bandar Lampung</p>
                            <p className={styles.text}>Jl. In aja dulu, No 212 Lintang Barat</p>
                            <p className={styles.text}>newustech@gmail.com</p>
                    </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <Map
                    google={this.props.google}
                    style={{width:'100%', height:'50%'}}
                    zoom={14}
                    initialCenter={
                        {
                            lat: 23.760374,
                            lng: 90.411643
                        }
                    }
                />
            </div> */}
        </>
    )
}

export default ContactUsForm;