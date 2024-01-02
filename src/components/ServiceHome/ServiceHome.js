import React from "react";
import styles from "./ServiceHome.module.css";
import { Link } from "react-router-dom";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ServiceHome = (props) => {
    return (
        <div className={`${styles.box} user-select-none`}>
            <img src={props.icon} alt="" className={styles.image} />
            <p className={styles.heading}>{props.heading}</p>
            <p className={styles.text}>{props.content}</p>
            <div className={styles.btn}><Link to={`/individualService?id=${props.id}`}>
                <button className={`btn custom_btn ${styles.button}`}>Start Project</button>
            </Link>
            <Link to={`/individualService?id=${props.id}`}>
                <button className={`btn custom_btn ${styles.subbutton}`}>View Portofolio</button>
            </Link></div>

        </div>
    );
};
export default ServiceHome;
