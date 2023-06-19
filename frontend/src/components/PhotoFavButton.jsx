import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggleFavorite = useCallback(() => {
        console.log('Toggling favorite...');
        setIsFavorite((prevIsFavorite) => {
            console.log('Previous favorite state:', prevIsFavorite);
            const newIsFavorite = !prevIsFavorite;
            console.log('New favorite state:', newIsFavorite);
            return newIsFavorite;
        });
    }, []);

    return (
        <div className="photo-list__fav-icon" onClick={handleToggleFavorite}>
            <div className="photo-list__fav-icon-svg">
                <FavIcon fill={isFavorite ? '#C80000' : '#EEEEEE'} />
            </div>
        </div>
    );
}

export default PhotoFavButton;
