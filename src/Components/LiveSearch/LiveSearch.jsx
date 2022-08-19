import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const LiveSearch = () => {
    
    const [searchValue, setSearchValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/products") {
      setSearchParams({
        q: searchValue,
      });
    }
  }, [searchValue]);
    
    return (
        <div>
            <input
             style={{width:'170px', height:'30px', paddingLeft:'30px', border:'0', borderRadius:'20px', marginTop:'20px', color:'black'}}
             onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search' type='text'/>
        </div>
    );
};

export default LiveSearch;