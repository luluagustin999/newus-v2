import React from "react";
import styles from './BlogHome.module.css';
import logo1 from '/Users/User/newus-v2/src/assets/blog/bloghome.svg';
import logo2 from '/Users/User/newus-v2/src/assets/blog/bloghome.svg';
import logo3 from '/Users/User/newus-v2/src/assets/blog/bloghome.svg';

const BlogHome = () =>{
    return(
        <div style={{backgroundColor: '#FFFFFF'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
            <p className={styles.heading}>Blog</p>
            <p className={styles.subheading}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </p>

                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo1} alt=""/>
                            <p className={styles.head}>Lorem Ipsum Dolor Amet Amit Amon Amin</p>
                            <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel ?</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo2} alt=""/>
                            <p className={styles.head}>Lorem Ipsum Dolor Amet Amit Amon Amin</p>
                            <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel ?</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo3} alt=""/>
                            <p className={styles.head}>Lorem Ipsum Dolor Amet Amit Amon Amin</p>
                            <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel ?</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default BlogHome;