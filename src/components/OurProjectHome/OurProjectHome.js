import React from "react";
import styles from './OurProjectHome.module.css';
import logo1 from '/Users/User/newus-v2/src/assets/home/project.svg';
// import logo2 from '/Users/User/newus-v2/src/assets/blog/bloghome.svg';
// import logo3 from '/Users/User/newus-v2/src/assets/blog/bloghome.svg';


const OurProjectHome = () =>{

    return(
        <div style={{backgroundColor: '#FFFFFF', marginTop:'-80px'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
            <p className={styles.heading}>Success Project</p>
            <div style={{display:'flex', justifyContent:'center'}}>
            <p className={styles.subheading}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </p>
            </div>
            <div className="row">
                            <div className="col-md-4">
                            <div className={styles.box} style={{ backgroundImage: `url(${logo1})` }}>
                                {/* <img src={logo1} alt=""/> */}
                                <p className={styles.head}>Siger Berjaya</p>
                                <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.box} style={{ backgroundImage: `url(${logo1})` }}>
                                {/* <img src={logo1} alt=""/> */}
                                <p className={styles.head}>Siger Berjaya</p>
                                <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.box} style={{ backgroundImage: `url(${logo1})` }}>
                                {/* <img src={logo1} alt=""/> */}
                                <p className={styles.head}>Siger Berjaya</p>
                                <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.box} style={{ backgroundImage: `url(${logo1})` }}>
                                {/* <img src={logo1} alt=""/> */}
                                <p className={styles.head}>Siger Berjaya</p>
                                <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.box} style={{ backgroundImage: `url(${logo1})` }}>
                                {/* <img src={logo1} alt=""/> */}
                                <p className={styles.head}>Siger Berjaya</p>
                                <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.box} style={{ backgroundImage: `url(${logo1})` }}>
                                {/* <img src={logo1} alt=""/> */}
                                <p className={styles.head}>Siger Berjaya</p>
                                <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar</p>
                            </div>
                        </div>
                        </div>
                <div style={{textAlign:'center'}}>
                    <button className={`btn custom_btn ${styles.btn}`}>See More Project</button>
                </div>
            </div>
        </div>
    )
}
export default OurProjectHome;