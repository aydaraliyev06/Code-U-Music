import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { musicsContext } from '../../../context/MusicContextProvider';
import './AudioPlayer.css'

const AudioPlayer = () => {

  const { editMusic, getOneMusic, musicDetails } = useContext(musicsContext);

  const {id} = useParams() 


  useEffect(()=>{
    getOneMusic(id)
  },[id])

  const [ image, setImage ] = useState( musicDetails === null ? null : musicDetails.image);
    const [ music, setMusic ] = useState( musicDetails === null ? null : musicDetails.music);
    const [ nameMusic, setNameMusic ] = useState( musicDetails === null ? null : musicDetails.nameMusic);

    console.log(image)

    function handleClick (){
        let musics = {
            nameMusic,
            image,
            music,
        }

        if(nameMusic !== '' && music !== ''){
            editMusic(id, musics);
        }else{
            alert('Заполните строки!')
        }
    }


  return (
    <div className='add'>
            <h1 className="add-title">Edit Music</h1>
            <div className='music-add'>
                <div className='inp-box'>
                    <p className="inp-title">Name:</p>
                    <input type="text" placeholder='Name Music' onChange={(e)=> setNameMusic(e.target.value)} className="inp-add" />
                </div>
                <div className='inp-box'>
                    <p className="inp-title">Image:</p>
                    <input type="text" placeholder='Image' onChange={(e)=> setImage(e.target.value)} className="inp-add" />
                </div>
                <div className='inp-box'>
                    <p className="inp-title">Music:</p>
                    <input type="text" placeholder='Music' onChange={(e)=> setMusic(e.target.value)} className="inp-add" />
                </div>
                <button className='btn-add' onClick={handleClick} >Edit</button>
            </div>
        </div>
  );
};

export default AudioPlayer;