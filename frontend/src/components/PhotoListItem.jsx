import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props = PhotoListItem.defaultProps) => {
    const { onLikePhoto, liked, id } = props;
    const onClickHandler = function () {
        onLikePhoto(!liked, id);
        console.log("onConsole", onLikePhoto);
    }
    return (
        <div className="photo-list__item">
            <PhotoFavButton onClick={onClickHandler} isFavorite={liked} />
            <div className="photo-list__image-container">
                <img className="photo-list__image" src={props.imageSource} alt={`Photo by ${props.username}`} />
            </div>
            <div className="photo-list__user-details">
                <img className="photo-list__user-profile" src={props.profile} alt="User Profile" />
                <div className="photo-list__user-info">
                    <div className="photo-list__username">{props.username}</div>
                    <div className="photo-list__user-location">{`${props.location.city}, ${props.location.country}`}</div>
                </div>
            </div>

        </div>
    );
};

PhotoListItem.defaultProps = {
    id: '1',
    location: {
        city: 'Montreal',
        country: 'Canada'
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: 'Joe Example',
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;
