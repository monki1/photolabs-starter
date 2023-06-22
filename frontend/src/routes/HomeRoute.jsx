import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
    const {photos, topics, likedPhotos, onLikePhoto} = props;
    console.log("onLikePhoto", onLikePhoto);

  return (
      <div className='home-route'>
        <TopNavigationBar  topics={topics} likedPhotos={likedPhotos}/>

        <PhotoList photos={photos} onLikePhoto={onLikePhoto} likedPhotos={likedPhotos} />
      </div>
  );
};
export default HomeRoute;
