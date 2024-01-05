// Navbar.js
import React from 'react';
import './NavTabs.module.css'; // Import file CSS jika diperlukan
import home from '../../assets/navtabs/home.svg';
import web from '../../assets/navtabs/website.svg';
import mobile from '../../assets/navtabs/mobile.svg';
import uiux from '../../assets/navtabs/uiux.svg';
import seo from '../../assets/navtabs/seo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links" style={{backgroundColor:'rgba(0, 0, 0, 0.5)', width:'100%', height:'90px', marginTop:'-100px'}}>
        <img src={home} alt="Home" className="nav-icon" style={{width:'80px', margin:'-105px 0 0 -45px'}} />
        <img src={web} alt="Website" className="nav-icon" style={{width:'80px', margin:'-105px 0 0 0'}} />
        <img src={mobile} alt="Mobile" className="nav-icon" style={{width:'80px', margin:'-105px 0 0 0'}} />
        <img src={uiux} alt="UIUX" className="nav-icon" style={{width:'80px', margin:'-105px 0 0 0'}} />
        <img src={seo} alt="SEO" className="nav-icon" style={{width:'80px', margin:'-105px 0 0 0'}} />
      </ul>
    </nav>
  );
};

export default Navbar;
