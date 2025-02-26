import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const {topics, anyLikedPhotos} = props;
  console.log("anyLikedPhotos", anyLikedPhotos);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList topics={topics}/>
        <FavBadge isFavPhotoExist={anyLikedPhotos}/>
    </div>
  )
}

export default TopNavigation;