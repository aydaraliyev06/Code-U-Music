import React, { useContext } from 'react';
import { authContext } from '../../context/AuthContext';

const Settings = () => {

    const {user, handleLogout} = useContext(authContext);

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'400px'}}>
            <h1>{user === null ? "не зашел" : user.email}</h1>
            <button style={{width:'200px', height:'40px', fontSize:'20px', background:'red', borderRadius:'20px'}} onClick={()=>handleLogout()}>
                Log Out
            </button>
        </div>
    );
};

export default Settings;