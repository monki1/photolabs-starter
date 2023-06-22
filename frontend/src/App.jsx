import React from 'react';
import useModal from './hooks/useModal';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import useAppData from './hooks/useAppData';

import './App.scss';

const App = () => {
    const { likedPhotos, onLikePhoto } = useAppData();
    return (
        <div className="App">
            <HomeRoute
                photos={photos}
                topics={topics}
                likedPhotos={likedPhotos}
                onLikePhoto={onLikePhoto}
            />

        </div>
    );
};

export default App;
