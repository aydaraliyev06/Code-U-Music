import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const musicsContext = createContext();

const API = 'http://localhost:8000/music';

const INIT_STATE = {
    music: [],
    musicDetails: null,
    pageTotalCount: 0,
}

const reducer = (prevState = INIT_STATE, action) => {
    switch (action.type){
        case "GET_MUSIC_LIST":
            return {
                ...prevState, music: action.payload
            };
        case "GET_ONE_MUSIC":
            return {
                ...prevState, musicDetails: action.payload
            };
        default: 
            return prevState;
    }
}

const MusicContextProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(reducer, INIT_STATE);

    
    const addMusic = async (product) => {
        await axios.post(API, product);
    }

    const location = useLocation();

    const navigate = useNavigate();

    const getMusicList = async () => {
        const res = await axios.get(`${API}${location.search}`);
        dispatch({
            type: "GET_MUSIC_LIST",
            payload: res.data,
        })
        console.log(res);
    }

    const getOneMusic = async (id) => {
        const { data } = await axios.get(`${API}/${id}`);
        dispatch({
            type: "GET_ONE_MUSIC",
            payload: data,
        })
    };

    const deleteMusic = async (id) =>{
        await axios.delete(`${API}/${id}`);
        getMusicList();
        navigate('/musiclist')
    }
    
    const editMusic = async (id, obj) => {
        await axios.patch(`${API}/${id}`, obj);
        getMusicList();
        navigate('/musiclist');
    }

    const cloud = {
        editMusic,
        getOneMusic,
        addMusic,
        getMusicList,
        deleteMusic,
        musicsArr: state.music, 
        musicDetails: state.musicDetails
    }

    console.log(state);

    return (
        <musicsContext.Provider value={cloud}>
            {children}
        </musicsContext.Provider>
    );
};

export default MusicContextProvider;