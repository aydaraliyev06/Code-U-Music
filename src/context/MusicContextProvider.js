import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const musicsContext = createContext();

const API = 'http://localhost:8000/music';

const INIT_STATE = {
    musics: [],
}

const MusicContextProvider = () => {
    const [ state, dispatch ] = useReducer(INIT_STATE);

    const location = useLocation();

    const getMusic = async () => {
        const res = await axios(`${API}${location.search}`);
        dispatch({
            type: "GET_MUSIC",
            payload: res,
        })
    }

    const cloud = {
        getMusic,
        musicsArr: state.
    }

    return (
        <musicContextProvider.Provider value={cloud}>
            {children}
        </musicContextProvider.Provider>
    );
};

export default MusicContextProvider;