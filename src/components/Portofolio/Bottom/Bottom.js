import React, { useState } from 'react';
import styles from './Bottom.module.css';
import { Link } from 'react-router-dom';
import fakeData from './fakeData';

const Bottom = () =>{
    const [data, setData] = useState(fakeData);
    const [active, setActive] = useState([true, false, false, false, false]);

    const filterData = (category) => {
        let temp = fakeData.filter((x) => x.category === category);
        setData([...temp]);
    }
    const activeNav = (i) =>{
        let temp = [false, false, false, false, false];
        temp[i] = true;
        setActive([...temp]);
    }

    return(
        <div className={`container ${styles.contain} overflow-hidden`}>         
             <div className={`${styles.grp_btn}`}>
                <p onClick={()=>{ setData(fakeData); activeNav(0) }} className={`${styles.filter} ${active[0] ? styles.active : null}`}>ALL</p>
                <p onClick={()=>{ filterData('technology'); activeNav(1) }} className={`${styles.filter} ${active[1] ? styles.active : null}`}>Technology</p>
                <p onClick={()=>{ filterData('coding'); activeNav(2) }} className={`${styles.filter} ${active[2] ? styles.active : null}`}>Coding</p>
                <p onClick={()=>{ filterData('seo'); activeNav(3) }} className={`${styles.filter} ${active[3] ? styles.active : null}`}>SEO</p>
                <p onClick={()=>{ filterData('music'); activeNav(4) }} className={`${styles.filter} ${active[4] ? styles.active : null}`}>Music</p>
                <p onClick={()=>{ filterData('engineering'); activeNav(4) }} className={`${styles.filter} ${active[5] ? styles.active : null}`}>Engineering</p>
                <p onClick={()=>{ filterData('testing'); activeNav(4) }} className={`${styles.filter} ${active[6] ? styles.active : null}`}>Testing</p>
            </div>

            <div className='row mb-2'>
                {
                    data.map((x) =>(
                        <div key={x.id} className={`col-md-4 col-sm-6 mt-4`}>
                            <Link to={`/projectDetails?id=${x.id}`} style={{textDecoration:"none"}}>
                                <div className={styles.img} style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(5, 25, 81, .55)), url(${x.img})`}}>
                                    <p className={styles.imgText1} >{x.designation}</p>
                                    <p className={styles.imgText2}>{x.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Bottom;