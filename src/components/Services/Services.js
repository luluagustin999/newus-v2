import React from "react";
import styles from './Services.module.css';
import ServiceHome from "../ServiceHome/ServiceHome";
import data from './data';

const Services = () => {
    return(
        <div className={`container ${styles.contain} overflow-hidden pb-2`}>
                <p className={styles.heading}>What We Do</p>
            <div>
                <p className={`mx-auto ${styles.subHeading}`}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est</p>
            </div>

            <div className={`row ${styles.cont}`}>
                {
                    data && data.map(x=>(
                        <div key={x.id} className="col-lg-6 col-md-6">
                            <ServiceHome id={x.id} heading={x.heading} content={x.content} to={x.to} icon={x.icon}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Services;