import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
    const {photos, topics, likedPhotos, onLikePhoto} = props;
    console.log("onLikePhoto", onLikePhoto);
    console.log("likedPhotos", likedPhotos);
    const anyLikedPhotos = likedPhotos.length > 0;

  return (
      <div className='home-route'>
        <TopNavigationBar  topics={topics} anyLikedPhotos={anyLikedPhotos}/>

        <PhotoList photos={photos} onLikePhoto={onLikePhoto} likedPhotos={likedPhotos} />
      </div>
  );
};
export default HomeRoute;
