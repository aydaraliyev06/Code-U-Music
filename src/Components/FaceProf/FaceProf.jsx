import React from 'react';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import './FaceProf.css';



const FaceProf = () => {
    const { user, setUser } = useContext(authContext)

    return (
        <div className='face'>
            <div className='face-box'>
                {user}
            </div>
        </div>
    );
};

export default FaceProf;