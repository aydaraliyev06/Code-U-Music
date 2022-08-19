import React, { useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { musicsContext } from '../../context/MusicContextProvider';
import LiveSearch from '../LiveSearch/LiveSearch';
import './MusicList.css';


const MusicList = () => {

    let { getMusicList, musicsArr } = useContext(musicsContext);
    // let navigate = useNavigate();

    useEffect(()=>{
        getMusicList()
    },[])
    // const {id} = useParams();


    return (
        <div className='musiclist'>
            <h2>Search</h2>
            <LiveSearch/>
            <div className='musiclist-box'>
                <h3 className='music-title'>Home</h3>
                <div className='musiclist-m'>
                    <div style={{width:'100%', height:'2px', background: 'rgba(255, 255, 255, 0.514)'}}></div>
                    {musicsArr.map((item)=>(
                        <div key={item.id} className='music-card'>
                        <div className='music-card-left'>
                            <audio src={item.music}></audio>
                            <img height={50} width={50} src={item.image} alt={item.nameMusic}/>
                            <Link to={`/onemusic/${item.id}`} className='music-card-title'>{item.nameMusic}</Link>
                            </div>
                        <div className='music-card-right'>
                            <button className='music-card-btn'>
                                <img src="" alt="" />
                            </button>
                        </div>
                    </div>
                    ))}                    
                </div>
            </div>
        </div> 
    );
};

export default MusicList;