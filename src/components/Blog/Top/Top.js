import React, {useState} from "react";
import './Top.module.css'

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
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="Search here .."
            style={{backgroundColor:"#FFFFFF", borderRadius:"10px", marginTop:"-80px", width:"500px"}}
            value={searchTerm}
            onChange={handleChange}
          />
          {/* <button type="submit">Cari</button> */}
        </form>
      );
};

export default Top;