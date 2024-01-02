import React from "react";
import styles from './Team.module.css';
import icon from '/Users/User/miritus/src/assets/team/people.svg';
import icon1 from '/Users/User/miritus/src/assets/team/people1.svg';
import icon2 from '/Users/User/miritus/src/assets/team/people2.svg';
// import logo2 from '../../../assets/aboutUs/middle2.svg';
// import logo3 from '../../../assets/aboutUs/middle3.svg';
// import logo4 from '../../../assets/aboutUs/middle4.svg';
// import vector from '../../../assets/aboutUs/vector.svg';


const Team = () =>{
    return(
        <div style={{backgroundColor: '#FFFFFF'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                <p className={styles.mainHead}>Meet the team behind the apps</p>
                <div className="row">
                    <div className="col-md-2">
                        <div className={styles.box}>
                        <img src={icon} alt="" style={{width:'250px'}}/>
                            <p className={styles.head}>Supardi Aja</p>
                            <p className={styles.subhead}>Founder & Chairman</p>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className={styles.box}>
                            <img src={icon} alt="" style={{width:'250px', marginLeft:"100px"}}/>
                            <p className={styles.head} style={{marginRight:"-270px"}}>Yona B </p>
                            <p className={styles.subhead} style={{marginRight:"-270px"}}>Marketing Director</p>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className={styles.box}>
                            <img src={icon1} alt="" style={{width:'250px', marginLeft:"200px"}}/>
                            <p className={styles.head} style={{marginRight:'-470px'}}>Boymen</p>
                            <p className={styles.subhead} style={{marginRight:'-470px'}}>Web Developer</p>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className={styles.box}>
                            <img src={icon2} alt="" style={{width:'250px', marginLeft:"300px"}}/>
                            <p className={styles.head} style={{marginRight:"-670px"}}>Suda Ah</p>
                            <p className={styles.subhead} style={{marginRight:"-670px"}}>Mobile Developer</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Team;