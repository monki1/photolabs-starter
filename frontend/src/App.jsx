import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import useAppData from "./hooks/useAppData";
// Note: Rendering a single component to build components in isolation
const App = () => {
    const {likedPhotos, onLikePhoto} = useAppData();
    return(

    <div className="App">

        <HomeRoute photos={photos} topics={topics}
                   likedPhotos={likedPhotos}
                   onLikePhoto={onLikePhoto}/>
    </div>
);
}

export default App