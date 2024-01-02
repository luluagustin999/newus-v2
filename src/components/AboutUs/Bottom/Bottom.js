import React from 'react';
import img1 from '../../../assets/aboutUs/bottom1.png';
import img2 from '../../../assets/aboutUs/bottom2.svg';
import img3 from '../../../assets/aboutUs/bottom3.svg'
import styles from './Bottom.module.css';


const Bottom = () =>{
    return(
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                {
                        <div className={`row ${styles.row} flex-column-reverse flex-md-row`}>
                            <div className='col-md-6'>
                            <p className={styles.about}>Our Happy Client</p>
                            <p className={styles.contn}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.</p>
                                <img src={img1} alt='' className={styles.img}/>
                                <img src={img2} alt='' className={styles.img}/>
                                <img src={img3} alt='' className={styles.img}/>
                            </div>
                        </div>
                        
                        // :
                        // <div key={x.id} className={`row ${styles.image}`}>
                        //     <div  className='col-md-6'>
                        //         <img src={x.img} alt='' className={styles.img}/>
                        //     </div>
                        // </div>
                }
            </div>
        </>
    )
}
export default Bottom;