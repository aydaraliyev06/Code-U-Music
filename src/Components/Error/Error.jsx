import React from 'react';
import './Error.css';

const Error = () => {
    return (
        <div className='Error'>
            <h1 className='Error-title'>404</h1>
            <p className="Error-sub">ERROR</p>
            <img className='Error-gif' src="https://i.gifer.com/origin/f1/f15f8eb62d7e7cad9d365b9292922fa8_w200.webp" alt="Error" />
        </div>
    );
};

export default Error;