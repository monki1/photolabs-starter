import React, { useReducer } from 'react';

// Initial state of the application
const initialState = {
    likedPhotos: [],
};

// Reducer function to manage state updates
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LIKED_PHOTOS':
            return { ...state, likedPhotos: action.payload };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const useAppData = () => {
    // Initialize state and dispatch function using the reducer
    const [state, dispatch] = useReducer(reducer, initialState, undefined);

    // Destructure state value for easier access
    const { likedPhotos } = state;

    // Function to update the liked photos array
    const onLikePhoto = (status, photoId) => {
        if (status) {
            dispatch({ type: 'SET_LIKED_PHOTOS', payload: [...likedPhotos, photoId] });
        } else {
            dispatch({
                type: 'SET_LIKED_PHOTOS',
                payload: likedPhotos.filter(id => id !== photoId),
            });
        }
    };

    // Return the liked photos array and the onLikePhoto function
    return {
        likedPhotos,
        onClickLikes: onLikePhoto
    };
};

export default useAppData;
