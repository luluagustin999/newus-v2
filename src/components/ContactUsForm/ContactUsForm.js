import React, { useState } from "react";
import styles from './ContactUsForm.module.css';
import contact from '/Users/User/newus-v2/src/assets/contactUs.svg';
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
                <div className="row">
                <div className={`col-md-6 ${styles.imgContain}`}>
                    <img src={contact} alt="" className={styles.img1}/>
                </div>
                <div className="col-md-6" style={{textAlign: 'left'}}>
                    <p className={styles.heading}>Get In Touch</p>
                    <p className={styles.head}>Do you really think graphic arts supply houses were hiring classics scholars</p>
                <div className="row">
                    <div className="col">
                    <label className={styles.label}>First Name</label><br/>
                        <input name="name" value={formContent.firstname} onChange={handleChange} className={styles.input} type="text" />
                    </div>
                    <div className="col">
                    <label className={styles.label}>Last Name</label><br/>
                        <input name="name" value={formContent.lastname} onChange={handleChange} className={styles.input} type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <label className={styles.label}>Email</label><br/>
                        <input name="name" value={formContent.emaiil} onChange={handleChange} className={styles.input} type="text" />
                    </div>
                    <div className="col">
                    <label className={styles.label}>Phone Number</label><br/>
                        <input name="name" value={formContent.phone} onChange={handleChange} className={styles.input} type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <label className={styles.label}>Message</label><br/>
                        <input name="name" value={formContent.message} onChange={handleChange} className={styles.input} style={{height : "114px", width:"550px"}} type="text" />
                    </div>
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