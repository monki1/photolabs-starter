import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import useModal from "../hooks/useModal";
import PhotoDetailsModal from "./PhotoDetailsModal";

const HomeRoute = (props) => {

    const {photos, topics, likedPhotos, onLikePhoto} = props;
    const {modalOpen, selectedPhoto, closeModal, openModal} = useModal();
    console.log("onLikePhoto", onLikePhoto);
    console.log("likedPhotos", likedPhotos);
    const anyLikedPhotos = likedPhotos.length > 0;

  return (
      <div className='home-route'>
        <TopNavigationBar  topics={topics} anyLikedPhotos={anyLikedPhotos}/>
        <PhotoList photos={photos} onLikePhoto={onLikePhoto} likedPhotos={likedPhotos} onClickPhoto={openModal}/>
          {modalOpen && (
              <PhotoDetailsModal
                  photo={selectedPhoto}
                  onClose={closeModal}
              />
          )}
      </div>
  );
};
export default HomeRoute;
