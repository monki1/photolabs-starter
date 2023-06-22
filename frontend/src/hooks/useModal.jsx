import { useState } from 'react';

const useModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setModalOpen(true);
    };

    const closeModal = () => {
        console.log('Closing modal...');
        setSelectedPhoto(null);
        setModalOpen(false);
    };

    return { modalOpen, selectedPhoto, openModal, closeModal };
};

export default useModal;
