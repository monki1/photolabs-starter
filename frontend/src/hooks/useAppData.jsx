import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const API_URL = '/api';
const PHOTO_URL = `${API_URL}/photos`;
const TOPIC_URL = `${API_URL}/topics`;

const initialState = {
    likedPhotos: { arr: [] },
    photos: { arr: [] },
    topics: { arr: [] },
    updatedAt: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LIKED_PHOTOS':
            return { ...state, likedPhotos: action.payload, updatedAt: Date.now() };
        case 'SET_PHOTO_DATA':
            return { ...state, photos: action.payload, updatedAt: Date.now() };
        case 'SET_TOPIC_DATA':
            return { ...state, topics: action.payload, updatedAt: Date.now() };
        default:
            return state; // Return current state for unknown action types
    }
};

const useAppData = () => {
    const [state, dispatch] = useReducer(reducer, initialState,);

    const { likedPhotos } = state;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const photosResponse = await axios.get(PHOTO_URL);
                const topicsResponse = await axios.get(TOPIC_URL);

                dispatch({ type: 'SET_PHOTO_DATA', payload: { arr: photosResponse.data, updatedAt: Date.now() } });
                dispatch({ type: 'SET_TOPIC_DATA', payload: { arr: topicsResponse.data, updatedAt: Date.now() } });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const onLikePhoto = (status, photoId) => {
        console.log('Toggling favorite...');
        if (status) {
            dispatch({ type: 'SET_LIKED_PHOTOS', payload: { arr: [...likedPhotos.arr, photoId], updatedAt: Date.now() } });
        } else {
            dispatch({ type: 'SET_LIKED_PHOTOS', payload: { arr: likedPhotos.arr.filter(id => id !== photoId) } });
        }
    };

    console.log('state', state);

    return {
        state,
        onLikePhoto,
    };
};

export default useAppData;
