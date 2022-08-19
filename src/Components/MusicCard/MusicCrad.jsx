import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { musicsContext } from '../../context/MusicContextProvider';
import './MuiscCard.css';

const MusicCrad = () => {

    const { getOneMusic,musicDetails, deleteMusic } = useContext(musicsContext) 

    let { id } = useParams();
    const navigate = useNavigate();

     useEffect(()=>{
        getOneMusic(id)
    },[id])

    console.log(musicDetails)

    return (
        <div className='music-crad'>
            <img className='details-img' src={ musicDetails === null ? null : musicDetails.image} alt="img" />
            <h1 className='details-title'>{ musicDetails === null ? null : musicDetails.nameMusic}</h1>
            <audio src={ musicDetails === null ? null : musicDetails.music} controls></audio>
            <div className='btn-music-card'>
                <button className="btn-music-card-edit">
                    <Link to={`edit/${id}`}>
                        Edit
                    </Link>
                </button>
                <button onClick={()=>deleteMusic(id)} className="btn-music-card-delete">Delete</button>
            </div>
        </div>
    );
};

export default MusicCrad;