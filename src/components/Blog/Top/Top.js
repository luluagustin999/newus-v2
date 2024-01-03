import React, {useState} from "react";
import styles from './Top.module.css'

const Top = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(searchTerm);
    };

    return (
      <div className={`container overflow-hidden`} style={{backgroundColor:"#FFFFFF", borderRadius:"10px", marginTop:"-80px", width:"501px"}}>
            <form onSubmit={handleSubmit}>
            <input
            className={styles.content}
            type="text"
            placeholder="Search here .."
            value={searchTerm}
            onChange={handleChange}
          />
          {/* <button type="submit">Cari</button> */}
        </form>
        </div>
      );
};

export default Top;