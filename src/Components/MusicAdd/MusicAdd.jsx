import React, { useContext, useState } from 'react';
import { musicsContext } from '../../context/MusicContextProvider';
import './MusicAdd.css';

const MusicAdd = () => {

    let {addMusic} = useContext(musicsContext);

    const [ image, setImage ] = useState('');
    const [ music, setMusic ] = useState('');
    const [ nameMusic, setNameMusic ] = useState('');

    // console.log(image)

    function handleClick (){
        let musics = {
            nameMusic,
            image,
            music,
        }

        if(nameMusic !== '' && music !== ''){
            addMusic(musics);
        }else{
            alert('Заполните строки!')
        }
    }

    return (
        <div className='add'>
            <h1 className="add-title">Add Music</h1>
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
                <button className='btn-add' onClick={handleClick} >Add</button>
            </div>
        </div>
    );
};

export default MusicAdd;